import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Close from '@material-ui/icons/Close';

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppSwipeableDrawer from "./AppDrawer";

const styles = {
    root: {
        flexGrow: 1
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class HeaderAppBar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            auth: true,
            anchorEl: null,
            isDrawerOpen: false
        }
    }

    handleDrawer = () => {
        //console.log(this.customDrawerReference.state);
        //console.log(this.customDrawerReference);
        //this.refs.customDrawerReference.handleDrawerToggle();
        this.customDrawerReference.handleToggle();
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    };

    handleMenu = event => {
        this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    render() {
        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (

            <div className={classes.root}>

                <AppSwipeableDrawer innerRef={node => this.customDrawerReference = node}/>

                <AppBar position="static">
                    <Toolbar>

                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            onClick={this.handleDrawer}
                        >
                            {(this.state.isDrawerOpen) ? <Close/> : <MenuIcon/>}

                        </IconButton>

                        <Typography
                            varient="title"
                            color="inherit"
                            className={classes.title}
                        >
                            Promotion App
                        </Typography>

                        <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            color="inherit"
                            onClick={this.handleMenu}
                        >
                            <AccountCircle />
                        </IconButton>

                        <Menu
                            id="user-dropdown"
                            anchorEl={anchorEl}
                            open={open}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <MenuItem onClick={this.handleClose}>Loin</MenuItem>
                            <MenuItem onClick={this.handleClose}>Register</MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>

            </div>
        );
    }
};

HeaderAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderAppBar);