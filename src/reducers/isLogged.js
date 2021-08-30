import { loggedIn } from '../initialState.json';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const loggedReducer = (state = loggedIn, action) => {
    switch (action.type) {
        case SIGN_IN:
            return true;
        case SIGN_OUT:
            return false;
        default:
            return state;
    }
};

export default loggedReducer;
