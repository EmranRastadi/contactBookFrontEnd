import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./DashBoardStyling";
import {useTheme} from "@material-ui/core";
import {Add, Contacts, Person, Settings} from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";


function Sidebar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>

                <List>
                    <ListItem button key="Profile">
                        <ListItemIcon><Person/></ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                    <ListItem button key="Change Profile">
                        <ListItemIcon><Settings/></ListItemIcon>
                        <ListItemText primary="Change Profile"/>
                    </ListItem>
                </List>

                <Divider/>




                <List>
                    <NavLink to="/dashboard/add-contact">
                        <ListItem button key="Add Contacts">
                            <ListItemIcon><Add /></ListItemIcon>
                            <ListItemText primary="Add Contact"/>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/dashboard">
                        <ListItem button key="Contact List">
                            <ListItemIcon><Contacts /></ListItemIcon>
                            <ListItemText primary="Contact List"/>
                        </ListItem>
                    </NavLink>

                </List>



                {/*<List>*/}
                {/*    {['Add Contact', 'List Contact'].map((text, index) => (*/}

                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index === 0 ? <Add/> : <Contacts/>}</ListItemIcon>*/}
                {/*            <ListItemText primary={text}/>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}

                <Divider/>
            </Drawer>
        </div>
    );
}


export default Sidebar;