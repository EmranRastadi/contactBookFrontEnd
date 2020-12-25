const initialState = {
    contactRes : null,
    loadContacts : null,
    singleContact : null,
    contactUpdate : null,
};

const ContactReducer = (state = initialState , action) => {
    switch (action.type)
    {
        case 'SUCCESS_ADD' : return {
            ...state , contactRes: "add Successfuly !"
        }
        case 'ERROR_ADD' : return {
            ...state , contactRes: "error in add Contact"
        }
        case 'CODE_ERR' : return {
            ...state , contactRes:  "Please try again!"
        }
        case 'SUCCESS_GET' : return {
            ...state , contactRes:  "get data was successfully!",loadContacts: action.res
        }
        case 'ERROR_GET' : return {
            ...state , contactRes:  "error in get data!" , loadContacts: action.error
        }
        case 'SEARCH_SUCCESS' : return {
            ...state , contactRes:  "serach data get success!" , loadContacts: action.res
        }
        case 'SINGLE_SUCCESS' : return {
            ...state , contactRes:  "get single data was successfully!" , singleContact: action.res
        }
        case 'UPDATE_SUCCESS' : return {
            ...state , contactUpdate:  "contact update was successfully!"
        }
        default : return state
    }
}

export default ContactReducer;