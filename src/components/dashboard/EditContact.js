import React, {Component} from 'react';
import {Avatar, Button, Container, createStyles, Grid, TextField} from "@material-ui/core";
import {AddAPhoto, ContactPhone, SendOutlined} from "@material-ui/icons";
import ReCAPTCHA from "react-google-recaptcha";
import {AddContactAct, GetSingleContactAct, EditContactAction} from "../../store/action/ContactAction";
import {connect} from "react-redux";

const useStyle = createStyles({
    root: {
        flexGrow: 1
    }
})

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            picture: '',
            captcha: false
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.GetSingleContactAct(id);
    }

    componentDidUpdate = async (prevProps, prevState) => {
        let data = this.props.ContactRes.data;
        let file_dir = this.props.ContactRes.file_dir;
        if (prevProps.ContactRes !== this.props.ContactRes) {
            this.setState({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phonenumber: data.phonenumber,
                picture: file_dir + "/" + data.profile_image,
            })
        }
    }
    changeCaptcha = (value) => {
        if (value) {
            this.setState({...this.state, captcha: true})
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    fileTranslate = (e) => {
        this.getBase64(e.target.files[0], (base64String) => {
            this.state.picture = base64String;
        });
    }
    handleSubmit = (e) => {
        const {id} = this.props.match.params;
        e.preventDefault()
        this.props.EditContactAction(this.state, id);
    }

    render() {
        return (
            <div style={useStyle.root}>
                <Container maxWidth="sm">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <Grid container>
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <ContactPhone style={{fontSize: 145, color: "#b3b3b3"}}/>
                                <p style={{color: "#b3b3b3", fontSize: 26, marginTop: -10}}>Edit Contact</p>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="First name" name="firstname"
                                           variant="outlined"
                                           value={this.state.firstname}
                                           type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Last name" name="lastname"
                                           variant="outlined"
                                           value={this.state.lastname}
                                           type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Email" name="email"
                                           variant="outlined"
                                           value={this.state.email}
                                           type="text"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required onChange={this.handleChange} label="Phone number" name="phonenumber"
                                           variant="outlined"
                                           value={this.state.phonenumber}
                                           type="text"/>
                            </Grid>
                            <Grid item xs={6}>
                                <input
                                    name="picture"
                                    accept="image/*"
                                    id="contained-button-file"
                                    onChange={this.fileTranslate}
                                    multiple
                                    style={{display: 'none'}}
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span"
                                            startIcon={<AddAPhoto/>}>
                                        select a Profile image
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <Avatar src={this.state.picture}/>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 20}}>
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
                                        Edit Contact
                                    </Button> :
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled
                                        endIcon={<SendOutlined/>}
                                        color="primary">
                                        Edit Contact
                                    </Button>}
                            </Grid>
                        </Grid>
                    </form>
                    {this.props.contactUpdate !== null ? this.props.history.push("/dashboard") : ''}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ContactRes: state.Contact.singleContact,
        contactUpdate: state.Contact.contactUpdate,
    }
}
export default connect(mapStateToProps, {AddContactAct, GetSingleContactAct, EditContactAction})(EditContact);