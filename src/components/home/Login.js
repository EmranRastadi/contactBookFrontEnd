import React, {Component} from 'react';
import {Button, Container, createStyles, Grid, TextField} from "@material-ui/core";
import Header from "../../layout/home/Header";
// import BottomNavigation from '@material-ui/core/BottomNavigation';

import {AlternateEmailOutlined, LinkedIn, PermIdentity, SendOutlined} from "@material-ui/icons";
// import handleSubmit from "redux-form/lib/handleSubmit";
import ReCAPTCHA from "react-google-recaptcha";
import {SiteKey} from "../../services/capSiteKey";
import {signIn} from "../../store/action/AuthActions";
import {connect} from "react-redux";
import history from "../history";

import Footer from "../../layout/home/Footer";

const useStyle = createStyles({
    root: {
        flexGrow: 1
    }
})


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            recap: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state, history)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    capChange = (value) => {
        if (value) {
            this.setState({...this.state, recap: true})
        }
    }

    render() {
        return (
            <div style={useStyle.root}>
                <Header/>
                <Container maxWidth="sm" style={{marginTop : 85}}>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>

                        <Grid container>

                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <PermIdentity style={{fontSize: 145, color: "#b3b3b3"}}/>
                                <p style={{color: "#b3b3b3", fontSize: 26, marginTop: -10}}>LOGIN FORM</p>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type="text" id="email" onChange={this.handleChange} required label="Email"
                                           variant="outlined"/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type="password" id="password" onChange={this.handleChange} required
                                           label="Password"
                                           variant="outlined"/>
                            </Grid>

                            <Grid item xs={12}>
                                <ReCAPTCHA onChange={this.capChange} sitekey={SiteKey}/>
                            </Grid>


                            <Grid item xs={12} spacing={24} container justify="space-between">

                                <Grid item xs={6}>

                                    {this.state.recap ? <Button
                                            variant="contained"
                                            type="submit"
                                            endIcon={<SendOutlined/>}
                                            color="primary">
                                            login
                                        </Button> :
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            disabled
                                            endIcon={<SendOutlined/>}
                                            color="primary">
                                            login
                                        </Button>}


                                </Grid>

                                <Grid item>
                                    <div>
                                        <Button
                                            style={{textAlign: "end"}}
                                            variant="contained"
                                            startIcon={<AlternateEmailOutlined/>}
                                            color="secondary">
                                            google
                                        </Button>

                                        <Button
                                            style={{
                                                textAlign: "end",
                                                background: "#0073b1",
                                                color: "#fff",
                                                marginLeft: 15
                                            }}
                                            variant="contained"
                                            startIcon={<LinkedIn/>}
                                        >
                                            linkedin
                                        </Button>
                                    </div>

                                </Grid>

                            </Grid>


                        </Grid>

                    </form>

                </Container>



                {/*{this.props.code == 1 ? this.props.history.push('/dashboard') : ''}*/}
                <Footer />

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {auth: state.Auth.authResponse}
}
export default connect(mapStateToProps, {signIn})(Login);