import { INCREMENT_BY, DECREMENT_BY } from '../reducers/counter';
import { SIGN_IN, SIGN_OUT } from '../reducers/isLogged';

export const increment = (amount) => {
    return {
        type: INCREMENT_BY,
        payload: amount,
    };
};

export const decrement = (amount) => {
    return {
        type: DECREMENT_BY,
        payload: amount,
    };
};

export const signIn = () => {
    return {
        type: SIGN_IN,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};
