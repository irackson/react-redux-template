import currentCount from './counter';
import loggedIn from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentCount,
    loggedIn,
});

export default rootReducer;
