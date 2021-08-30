# Learn React Redux

based on: <https://www.youtube.com/watch?v=CVpUuw9XSjY>

```javascript
import { createStore } from 'redux';

//! STORE --> GLOBALIZED STATE
const initialState = {
    currentCount: 0,
};

//! ACTION INCREMENT --> TRANSFORMATION OF STATE TO APPLY
export const INCREMENT_BY = 'INCREMENT_BY';
const DECREMENT_BY = 'DECREMENT_BY';

const increment = (valToAdd) => {
    return {
        type: INCREMENT_BY,
        payload: valToAdd,
    };
};

const decrement = (valToSubtract) => {
    return {
        type: DECREMENT_BY,
        payload: valToSubtract,
    };
};

//! REDUCER --> SWITCH ACTION TO MODIFY STORE

const addToCurrentCount = (state, action) => {
    return {
        ...state,
        currentCount: state.currentCount + action.payload,
    };
};

const subtractFromCurrentCount = (state, action) => {
    return {
        ...state,
        currentCount: state.currentCount - action.payload,
    };
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BY:
            return addToCurrentCount(state, action);
        case DECREMENT_BY:
            return subtractFromCurrentCount(state, action);
        default:
            return state;
    }
};

let store = createStore(counterReducer);

//* logging
store.subscribe(() => console.log(store.getState()));

//! DISPATCH --> EXECUTES ACTION
store.dispatch(increment(5));
store.dispatch(decrement(2));
store.dispatch(decrement(2));
```
