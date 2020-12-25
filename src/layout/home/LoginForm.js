import {Field, reduxForm} from "redux-form";
import {TextField, Grid, Container, createStyles, Button} from "@material-ui/core";
import {SendOutlined, PermIdentity, AlternateEmailOutlined, LinkedIn} from "@material-ui/icons";


let useStyle = createStyles({
    root: {
        flexGrow: 1,
        marginTop: 30
    }
})

let renderError = ({touched, error}) => {
    if (touched && error) {
        return (
            <div>
                <p className="alerting">{error}</p>
            </div>
        )
    }
}

let renderForm = ({input, label, meta}) => {
    return (
        <div>
            <TextField autoComplete="off" required {...input} label={label} variant="outlined"/>
            <div>{renderError(meta)}</div>
        </div>
    )
}

let LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <div style={useStyle.root}>
            <Container maxWidth='sm'>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <PermIdentity style={{fontSize: 145, color: "#b3b3b3"}}/>
                                <p style={{color: "#b3b3b3", fontSize: 26, marginTop: -10}}>LOGIN FORM</p>
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="email" component={renderForm} label="Email" type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field type="text" component={renderForm} label="Password" name="password"/>
                            </Grid>

                            <Grid item xs={12} spacing={24} container justify="space-between">

                                <Grid item xs={6}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        endIcon={<SendOutlined/>}
                                        color="primary">
                                        login
                                    </Button>

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

                    </Grid>
                </form>
            </Container>
        </div>
    )
}

const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
        errors.name = "enter email";
    }
    if (!formValues.password) {
        errors.name = "enter your pass";
    }
    return errors;
}

LoginForm = reduxForm({
    form: 'LoginForm',
    validate
})(LoginForm)
export default LoginForm;
