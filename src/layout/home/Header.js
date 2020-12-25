import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {PersonAdd} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import '../../style.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

class Header extends Component {

    render() {
        return (
            <div className={useStyles.root}>
                <AppBar position="fixed">
                    <Toolbar>


                        <Grid
                            justify="space-between" // Add it here :)
                            container
                            spacing={24}>
                            <Grid item>
                                <Typography type="title" color="inherit">
                                        <NavLink to="/">Contact Manager</NavLink>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <div>

                                    <Button style={{marginRight: 15}} color="accent">
                                        <NavLink style={{color: '#fff'}} to="/home/login">Login</NavLink>
                                    </Button>


                                    <NavLink style={{color: '#fff'}} to="/home/register">

                                        <Button
                                            startIcon={<PersonAdd/>}
                                            variant="contained"
                                            style={{color: '#fff', background: '#00c853'}}>
                                            register
                                        </Button>
                                    </NavLink>


                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;