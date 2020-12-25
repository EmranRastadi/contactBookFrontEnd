import React, {Component} from 'react';
import Header from "../../layout/home/Header";
import RegisterForm from "../../layout/home/RegisterForm";
import {signUp} from '../../store/action/AuthActions'
import {connect} from "react-redux";

class Register extends Component {
    onSubmit = formValues => {
        console.log(formValues);
        // this.props.signUp(formValues)
    }

    render() {
        console.log("auth : ", this.props.AuthRes);
        return (
            <div>
                <Header />
                <RegisterForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("state is : " , state);
    return {AuthRes: state.Auth.authResponse}
}
export default connect(mapStateToProps, {signUp})(Register);
