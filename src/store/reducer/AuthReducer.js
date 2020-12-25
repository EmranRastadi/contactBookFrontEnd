import {act} from "@testing-library/react";

const initialState = {
    authResponse: null,
    res : null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PASS_WEAK' :
            return {
                ...state,
                authResponse: "Your password is weak !"
            }
        case 'SIGNUP_SUCCESS' :
            return {
                ...state,
                authResponse: "Signup was successfully done!"
            }
        case 'SIGNUP_ERR' :
            return {
                ...state,
                authResponse: action.error.message
            }
        case 'CODE_ERR' :
            return {
                ...state,
                authResponse: "please try later !"
            }
        case 'SIGNIN_SUCCESS' :
            return {
                ...state,
                authResponse: "login successfully!",res:action.res
            }
        case 'SIGNIN_ERR' :
            return {
                ...state,
                authResponse: action.error.message
            }
        default :
            return state;
    }
}
export default AuthReducer;