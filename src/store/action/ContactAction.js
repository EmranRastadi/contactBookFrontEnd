import {
    AddContactService, EditContactService,
    GetAllContactsService,
    GetSearchDataService,
    GetSingleDataService
} from "../../services/ContactService";

export const AddContactAct = (formData) => {
    return dispatch => {
        AddContactService(formData).then(res => {
            dispatch({type: 'SUCCESS_ADD', res})
        }, error => {
            dispatch({type: 'CODE_ERR', error})
        })
    }
}

export const GetAllContacts = (page) => {
    return dispatch => {
        GetAllContactsService(page).then(res => {
            dispatch({
                type: 'SUCCESS_GET', res
            })
        }, error => {
            dispatch({
                type: 'ERROR_GET', error
            })
        })
    }
}

export const GetSearchDatas = (searchContent, page) => {
    return dispatch => {
        GetSearchDataService(searchContent, page).then(res => {
            dispatch({
                type: 'SEARCH_SUCCESS', res
            })
        }, error => {
            dispatch({
                type: 'ERROR_GET', error
            })
        })
    }
}

export const GetSingleContactAct = (id) => {
    return dispatch => {
        GetSingleDataService(id).then(res => {
            dispatch({
                type: 'SINGLE_SUCCESS', res
            })
        }, error => {
            dispatch({
                type: 'ERROR_GET', error
            })
        })
    }
}

export const EditContactAction = (credential , id) => {
    return dispatch => {
        EditContactService(credential , id).then(res => {
            dispatch({
                type : 'UPDATE_SUCCESS' , res
            })
        },error => dispatch({
            type : 'ERROR_GET' , error
        }))
    }
}