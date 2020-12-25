import React, {Component} from 'react';
import {Button, Container, createStyles, Grid, TextField} from "@material-ui/core";
import Header from "../../layout/home/Header";
import Footer from "../../layout/home/Footer";
import {PersonAdd, SendOutlined} from "@material-ui/icons";
import ReCAPTCHA from "react-google-recaptcha";
import {signUp} from '../../store/action/AuthActions'
import {connect} from "react-redux";

const useStyle = createStyles({
    root: {
        flexGrow: 1
    }
})

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            captcha: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    changeCaptcha = (value) => {
        if (value) {
            this.setState({...this.state, captcha: true})
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
                                <PersonAdd style={{fontSize: 145, color: "#b3b3b3"}}/>
                                <p style={{color: "#b3b3b3", fontSize: 26, marginTop: -10}}>Register FORM</p>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Name" id="firstname" variant="outlined"
                                           type="text"/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Family" id="lastname" variant="outlined"
                                           type="text"/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Email" id="email" variant="outlined"
                                           type="text"/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Password" id="password"
                                           variant="outlined" type="password"/>
                            </Grid>

                            <Grid item xs={12}>
                                <ReCAPTCHA
                                    onChange={this.changeCaptcha}
                                    sitekey="6LcpQgMaAAAAAGxFKY3FHjW7jeuRIEfnhRozDriB"/>
                            </Grid>

                            <Grid item xs={6}>
                                {this.state.captcha ? <Button
                                    variant="contained"
                                    type="submit"
                                    endIcon={<SendOutlined/>}
                                    color="primary">
                                    register
                                </Button> :
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled
                                        endIcon={<SendOutlined/>}
                                        color="primary">
                                        register
                                    </Button>}

                            </Grid>

                        </Grid>
                    </form>
                </Container>

                <Footer />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {Auth: state.Auth.authResponse}
}
export default connect(mapStateToProps, {signUp})(Register);