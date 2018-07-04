import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import HeaderAppBar from './AppBar';
import AppBottomNavigation from "./AppBotomNavigation";

import AppDetailCard from "./AppDetailCard";
import AppCard from "./AppCard";
import AppTab from "./AppTab";
import AppVendor from "./AppVendor";
import AppCategories from "./AppCategory";
import AppSubscription from "./AppSubscription";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    }
});

function AppLayout(props) {
    const {classes} = props;
    const baseUrl = process.env.PUBLIC_URL;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}></Grid>
                <Grid item xs={12} sm={6}>

                    <Router>
                        <div>
                            <HeaderAppBar/>

                            <Switch>
                                <Route path={baseUrl + "/promo-detail"} component={AppDetailCard}/>
                                <Route path={baseUrl + "/app-card"} component={AppCard}/>
                                <Route path={baseUrl + "/vendors"} component={AppVendor}/>
                                <Route path={baseUrl + "/categories"} component={AppCategories}/>
                                <Route path={baseUrl + "/subscriptions"} component={AppSubscription}/>
                                <Route path={baseUrl + "/"} component={AppTab}/>
                            </Switch>

                        </div>
                    </Router>

                    <AppBottomNavigation/>

                </Grid>
                <Grid item xs={12} sm={3}></Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(AppLayout);