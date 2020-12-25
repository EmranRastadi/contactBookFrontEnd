import React from "react";
import {Route, Redirect} from 'react-router-dom'
import Login from "./home/Login";

export const PrivateRoute = ({component: Component, ...rest}) => (

    // {...rest}  has a path and location


    <Route {...rest} render={props => (

        localStorage.getItem('user') ?
            <Component {...props} /> :
            <Redirect to="/home/login"/>
    )}/>

)