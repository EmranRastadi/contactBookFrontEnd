import React, {Component} from 'react';
import {connect} from "react-redux";
import Pagination from "rc-pagination";
import {GetAllContacts, GetSearchDatas} from "../../store/action/ContactAction";
import {Table, TableContainer, TableHead, TableRow, TextField, TableCell, TableBody, Paper} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {
    ArrowBack, ArrowForward,
    Edit,
    NavigateBefore,
    NavigateNext,
    RemoveCircleOutlineTwoTone,
    Search
} from "@material-ui/icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import '../../style.css'


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class ViewContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchContent: ""
        }
    }

    componentDidMount() {
        const page = "";
        this.props.GetAllContacts(page);
    }

    paginateContent = (currentPage) => {
        if (this.state.searchContent == "") {
            this.props.GetAllContacts(currentPage);
        } else {
            this.props.GetSearchDatas(this.state.searchContent, currentPage);
        }

    }

    onKeyUpSearch = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })

        if (e.target.value == "") {
            this.props.GetAllContacts("");
        } else {
            this.props.GetSearchDatas(this.state.searchContent, "");
        }
    }

    editContact = (e , id) => {
        this.props.history.push('/dashboard/edit-contact/'+id);
        // console.log("id : ", id);
    }

    renderList = () => {
        let counter = 1;
        let data = this.props.ContactRes.loadContacts;
        if (!data) {
            return (
                <p>please wait for loading data ...</p>
            )
        } else {
            let datafit = data.data.data;
            let file_dir = data.file_dir;
            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>first name</StyledTableCell>
                                <StyledTableCell>last name</StyledTableCell>
                                <StyledTableCell>email</StyledTableCell>
                                <StyledTableCell>phone number</StyledTableCell>
                                <StyledTableCell>image</StyledTableCell>
                                <StyledTableCell>action</StyledTableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>

                            {datafit.map((value, index) => (

                                <TableRow key={value.id}>
                                    <TableCell>{value.firstname}</TableCell>
                                    <TableCell>{value.lastname}</TableCell>
                                    <TableCell>{value.email}</TableCell>
                                    <TableCell>{value.phonenumber}</TableCell>
                                    <TableCell><Avatar alt={value.firstname}
                                                       src={file_dir + "/" + value.profile_image}/></TableCell>
                                    <TableCell>
                                        <ButtonGroup disableElevation variant="contained" color="primary">
                                            <Button
                                                onClick={(e) => this.editContact(e, value.id)}
                                                startIcon={<Edit/>}>edit</Button>

                                            <Button color="secondary"
                                                    startIcon={<RemoveCircleOutlineTwoTone/>}>delete</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>


                    </Table>


                    <div style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        {datafit ?
                            <Pagination
                                className="paginate-style"
                                total={data.data.total}
                                pageSize={4}
                                // showPrevNextJumpers={false}
                                prevIcon={<NavigateBefore style={{color: '#fff'}}/>}
                                nextIcon={<NavigateNext style={{color: '#fff'}}/>}
                                jumpNextIcon={<ArrowForward style={{color: '#fff'}}/>}
                                jumpPrevIcon={<ArrowBack style={{color: '#fff'}}/>}
                                onChange={this.paginateContent}/>
                            :
                            ''
                        }
                    </div>


                </TableContainer>
            )
        }
    }


    render() {

        return (
            <div>


                <Grid container style={{width: 500, marginBottom: 15}} spacing={12} alignItems="flex-end">
                    <Grid item>
                        <Search/>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="searchContent"
                            onKeyUp={this.onKeyUpSearch}
                            id="input-with-icon-grid"
                            label="write your search ..."/>
                    </Grid>
                </Grid>

                {this.renderList()}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("state : " , state)
    return {ContactRes: state.Contact}
}

export default connect(mapStateToProps, {GetAllContacts, GetSearchDatas})(ViewContact);