import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Home from '@material-ui/icons/Home';

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
    stickey: {
        width: '41.5%',
        background: '#f1f1f1'
    },
};

class AppBottomNavigation extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <BottomNavigation value={value} onChange={this.handleChange} className={classes.stickey}>
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />}/>
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />}/>
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />}/>
                    <BottomNavigationAction label="Home" value="home" icon={<Home/>}/>
                </BottomNavigation>
            </div>
        );
    }
}

AppBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBottomNavigation);