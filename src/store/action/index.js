import {LOGIN_ACT} from "../type";

export const loginAction = formData => async (dispatch , getState) => {
    dispatch({type:LOGIN_ACT , payload : formData});
}