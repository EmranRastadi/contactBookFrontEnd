import {SignUpService, SignInService} from "../../services/AuthService";


let validatePass = (data) => {
    let rgx_pass = "^(?:(?=.*?[A-Z])(?:(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\\]{},.<>+=])|(?=.*?[a-z])(?:(?=.*?[0-9])|(?=.*?[-!@#$%^&*()_[\\]{},.<>+=])))|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\\]{},.<>+=]))[A-Za-z0-9!@#$%^&*()_[\\]{},.<>+=-]{7,50}$"
    return new RegExp(rgx_pass).test(String(data).toLowerCase());
}

export const signUp = (credintial) => {
    return dispatch => {
        if (credintial.password.length < 6) {
            return dispatch({type: 'PASS_WEAK'})
        }

        SignUpService(credintial).then(res => {
            if (res.token !== null) {
                localStorage.setItem("user", res.token);
                dispatch({type: 'SIGNUP_SUCCESS'})
            } else {
                dispatch({type: 'SIGNUP_ERR', res})
            }
        }, error => {
            dispatch({type: 'CODE_ERR', error});
        })
    }
}


export const signIn = (credintial, history) => {
    return dispatch => {
        SignInService(credintial).then(res => {
            if (res.token !== null) {
                localStorage.setItem("user", "Bearer " + res.token)
                dispatch({type: 'SIGNIN_SUCCESS', res})
                history.push('/dashboard')
            } else {
                dispatch({type: 'SIGNIN_ERR', res})
            }
        }, error => {
            dispatch({type: 'CODE_ERR', error})
        })
    }
}


