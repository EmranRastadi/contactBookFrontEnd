import React from "react";
import {Button, Container, createStyles, Grid} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import {PersonAdd, SendOutlined} from "@material-ui/icons";
// import Captcha from "../../components/homeLast/Captcha";
import ReCAPTCHA from "react-google-recaptcha";

let useStyle = createStyles({
    root: {
        flexGrow: 1
    }
})

let renderInput = ({input, label, meta}) => {
    return (
        <div>
            <TextField {...input} autoComplete="off" label={label} variant="outlined"/>
        </div>
    )
}

let captchaChange = (value) => {


}


let Captcha = () => {
    return (
        <ReCAPTCHA
            sitekey="6LcpQgMaAAAAAGxFKY3FHjW7jeuRIEfnhRozDriB"
            onChange={captchaChange}
        />
    )
}

let RegisterForm = (props) => {
    const {handleSubmit, pristine, submitting} = props;
    return (
        <div style={useStyle.root}>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>

                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <PersonAdd style={{fontSize: 145, color: "#b3b3b3"}}/>
                                <p style={{color: "#b3b3b3", fontSize: 26, marginTop: -10}}>REGISTER FORM</p>
                            </Grid>

                            <Grid item xs={12}>
                                <Field name="firstname" label="Name" component={renderInput} type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="lastname" label="Family" component={renderInput} type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="email" label="Email" component={renderInput} type="text"/>
                            </Grid>


                            <Grid item xs={12}>
                                <Field name="password" label="Password" component={renderInput} type="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field component={Captcha}/>
                            </Grid>

                            <Grid item xs={6}>

                                <Button
                                    variant="contained"
                                    type="submit"
                                    endIcon={<SendOutlined/>}
                                    color="primary">
                                    register
                                </Button>

                            </Grid>

                        </Grid>
                    </Grid>
                </form>
            </Container>

        </div>
    )
}

RegisterForm = reduxForm({
    form: 'RegisterForm',
})(RegisterForm)
export default RegisterForm;
