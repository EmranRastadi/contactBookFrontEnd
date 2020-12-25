import Header from "../../layout/home/Header";
import {createStyles} from "@material-ui/core";
import {Component} from "react";
import LoginForm from "../../layout/home/LoginForm";
import {signIn} from "../../store/action/AuthActions";
// import {loginAction} from '../../store/action';
import {connect} from "react-redux";

const useStyle = createStyles({
    root : {
        flexGrow : 1
    }
})
class Login extends Component{


    onSubmit = formValues => {
        this.props.signIn(formValues)
    }

    render() {
        console.log("user item : ",localStorage.getItem("user"));
        return (
            <div className={useStyle.root}>
                <Header />
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    console.log("state : ",state);
    // return {state : state};
}
export default connect(mapStateToProps,{signIn})(Login);