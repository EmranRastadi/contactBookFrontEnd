import AuthReducer from "./AuthReducer";
import ContactReducer from "./ContactReducer";
import {combineReducers} from "redux";
import {reducer as formReducer}  from 'redux-form';

export default combineReducers({
    Auth : AuthReducer,
    Contact : ContactReducer,
    form : formReducer
})