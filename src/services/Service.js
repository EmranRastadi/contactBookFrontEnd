import HttpServices from "./HttpServices";


export const AddContact = (credential) => {
    return dispatch => {
        const Http = new HttpServices();
        let urlAdd = "/user/contacts/add";

        Http.postData(credential, urlAdd).then(res => {
            if (res.success) {
                dispatch({
                    type: 'SUCCESS_ADD'
                })
            } else {
                dispatch({
                    type: 'ERROR_ADD'
                })
            }
        }, error => {
            dispatch({
                type: 'CODE_ERROR', error
            })
        })
    }
}