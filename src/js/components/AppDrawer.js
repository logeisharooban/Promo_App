import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import InboxIcon from '@material-ui/icons/Inbox';
import Drawer from '@material-ui/core/Drawer'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Settings from '@material-ui/icons/Settings';
import Dashboard from '@material-ui/icons/Dashboard';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Toc from '@material-ui/icons/Toc';
import Home from '@material-ui/icons/Home';
import Business from '@material-ui/icons/Business';
import Subscriptions from '@material-ui/icons/Subscriptions';

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

import {
    Link,
} from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    fullList: {
        width: 'auto'
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth
    },
    drawerHeader: {
        /*display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-end',
         padding: '0 8px',
         ...theme.mixins.toolbar*/
    },
    row: {
        display: 'flex',
        justifyContent: 'left',
        height: 150,
        backgroundImage: `url("https://images.pexels.com/photos/226592/pexels-photo-226592.jpeg?auto=compress&cs=tinysrgb&h=350")`,
        color: '#fff',
        verticalAlign: 'middle'
    },
    name: {
        position: 'relative',
        top: '40%'
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 60,
        height: 60,
        position: 'relative',
        top: '22%'
    }
});

class AppSwipeableDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchor: 'left'
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const {classes, theme} = this.props;
        const {anchor, open} = this.state;

        const userDetails = (
            <div>
                <div className={classes.row}>
                    <Avatar
                        alt="Logeish R"
                        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&h=350"
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <div className={classes.name}>Logeish R</div>
                </div>
            </div>
        );

        const slideList = (

            <div className={classes.drawerHeader}>

                {userDetails}

                <Divider/>

                <List component="nav">

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="Promotions"/>
                        </ListItem>
                    </Link>

                    <Link to="categories" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Toc />
                            </ListItemIcon>
                            <ListItemText primary="Categories"/>
                        </ListItem>
                    </Link>

                    <Link to="vendors" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Business />
                            </ListItemIcon>
                            <ListItemText primary="Vendors"/>
                        </ListItem>
                    </Link>

                    <Link to="subscriptions" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Subscriptions />
                            </ListItemIcon>
                            <ListItemText primary="Subscription"/>
                        </ListItem>
                    </Link>

                    <ListItem button>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </List>
                <Divider />
            </div>
        );

        return (
            <div>
                <Drawer
                    variant="persistent"
                    open={this.state.open}
                    anchor={anchor}
                    classes={{
                        paper: classes.drawerPapers
                    }}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        {slideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}
;

AppSwipeableDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppSwipeableDrawer);
//export default AppSwipeableDrawer;