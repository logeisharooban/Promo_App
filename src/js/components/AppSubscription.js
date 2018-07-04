import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import AppVendorList from "./AppVendorList";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class AppSubscription extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    id="full-width"
                    label="Search a Vendor"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder="Pizza Hut"
                    helperText="Subscribe or unsubscribe"
                    fullWidth
                    margin="normal"
                />
            </form>
                <AppVendorList/>
                </div>
        );
    }
}

AppSubscription.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppSubscription);