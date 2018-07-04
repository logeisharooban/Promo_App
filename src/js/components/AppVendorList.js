import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '70%',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        borderColor: '#cccccc',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    bigAvatar: {
        width: 50,
        height: 50
    }
});

class AppVendorList extends React.Component {
    state = {
        checked: ['wifi'],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-46dc24d8ae844e6f8774d9c4c2e05603.png"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Pizza Hut" />
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleToggle('wifi')}
                                checked={this.state.checked.indexOf('wifi') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-993091d31c6b49ef99fe59d32237fd34.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </ListItemIcon>
                        <ListItemText primary="KFC" />
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleToggle('bluetooth')}
                                checked={this.state.checked.indexOf('bluetooth') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-cf9744b93cd045a3959eb89db33d92d0.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Subway" />
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleToggle('subway')}
                                checked={this.state.checked.indexOf('subway') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-db6354202f05496cadecf7757cc71036.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Amari" />
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleToggle('amari')}
                                checked={this.state.checked.indexOf('amari') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        );
    }
}

AppVendorList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppVendorList);