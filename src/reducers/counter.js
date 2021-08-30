import { currentCount } from '../initialState.json';

export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT_BY = 'DECREMENT_BY';

const counterReducer = (state = currentCount, action) => {
    switch (action.type) {
        case INCREMENT_BY:
            return state + action.payload;
        case DECREMENT_BY:
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;
