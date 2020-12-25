import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "../../layout/dashboard/DashBoardStyling";
import Sidebar from "../../layout/dashboard/sidebar";
import {Switch, Route} from "react-router-dom";
import AddContact from "./AddContact";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";

export default function Dashboard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>


            <Sidebar/>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route exact path={props.match.path} component={ViewContact}/>
                    <Route path={`${props.match.path}/view-all`} component={ViewContact}/>
                    <Route path={`${props.match.path}/add-contact`} component={AddContact}/>
                    <Route path={`${props.match.path}/edit-contact/:id`} component={EditContact} />
                </Switch>

            </main>
        </div>
    );
}
