import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Grid from "@material-ui/core/Grid";

import AppCard from "./AppCard";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 1 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    tabstyle: {
        padding: 0
    }
});

class AppTab extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>

                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Latest" />
                        <Tab label="Expired" />
                        <Tab label="Subscribed" />
                    </Tabs>
                </AppBar>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <AppCard 
                            title="Enjoy 30% Off for HNB, HSBC and NTB Amex Cardholders at Mahaweli Reach Hotel"
                            avatar="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-3fd6bfed1b364d2fab1069e9eb4b888e.jpg"
                            image="https://promolk.blob.core.windows.net/promotions/promo.lk-promo-4699b7aa0b5e4ae5b633d12eef99526e.jpg"
                            subheader="September 15, 2018"
                        />

                        <AppCard
                            title="The Great Triple Tuesday from Harpo's Pizza"
                            avatar="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-b223e98a40f24214aaf5305a9bbdaba5.jpg"
                            image="https://promolk.blob.core.windows.net/promotions/promo.lk-promo-8813ffaaa8ac4a169c97ee91c226b1e9.jpg"
                            subheader="June 14, 2018"
                        />

                        <AppCard
                            title="Enjoy 25% Off on Fresh Fruits for Combank Cardholders"
                            avatar="https://promolk.blob.core.windows.net/profiles/small/promo.lk-f314d35f65e04d3a83029bc6a860c1d5.jpg"
                            image="https://promolk.blob.core.windows.net/promotions/promo.lk-promo-2a9d7456ffa8408fa83bc9e237b70250.jpg"
                            subheader="July 14, 2018"
                        />

                    </TabContainer>

                    <TabContainer dir={theme.direction}>
                        <AppCard
                            title="Enjoy 25% Off on Fresh Fruits for Combank Cardholders"
                            avatar="https://promolk.blob.core.windows.net/profiles/small/promo.lk-f314d35f65e04d3a83029bc6a860c1d5.jpg"
                            image="https://promolk.blob.core.windows.net/promotions/promo.lk-promo-2a9d7456ffa8408fa83bc9e237b70250.jpg"
                            subheader="July 14, 2017"
                        />
                    </TabContainer>

                    <TabContainer dir={theme.direction}>
                        <AppCard
                            title="The Great Triple Tuesday from Harpo's Pizza"
                            avatar="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-b223e98a40f24214aaf5305a9bbdaba5.jpg"
                            image="https://promolk.blob.core.windows.net/promotions/promo.lk-promo-8813ffaaa8ac4a169c97ee91c226b1e9.jpg"
                            subheader="June 14, 2018"
                        />
                    </TabContainer>

                </SwipeableViews>

            </div>
        );
    }
}

AppTab.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppTab);