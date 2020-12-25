import HttpServices from "./HttpServices";
import {Http} from "@material-ui/icons";


// FormData ===> credintials
// register
export const SignUpService = (FormData) => {
    const http = new HttpServices();
    let SignUpUrl = "user/register";
    return http.postData(FormData, SignUpUrl).then(res => {
        // console.log("sign up res : ", JSON.stringify(res));
        return res;
    }).catch(error => console.log("sign up error is : ", error));
}


// login service
export const SignInService = (FormData) => {
    const Http = new HttpServices();
    let SignInUrl = "user/login";
    return Http.postData(FormData , SignInUrl).then(res => {
        // console.log(res);
        return res;
    }).catch(err => console.log("login error in => " , err))
}
