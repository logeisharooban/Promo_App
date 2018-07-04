import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: 20,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: '100%',
        marginTop: 20,
        display: 'inline-block'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    actions: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        }),
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        margin: 10,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    bigAvatar: {
        width: 100,
        height: 100
    }
});

class AppVendor extends React.Component {

    state = {
        expanded: false
    };

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Grid container spacing={24}>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-46dc24d8ae844e6f8774d9c4c2e05603.png"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            /></Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-993091d31c6b49ef99fe59d32237fd34.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-cf9744b93cd045a3959eb89db33d92d0.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-db6354202f05496cadecf7757cc71036.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-6e866e26b46d4944a1a9dc8cced404f0.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-b540ec2da965497c9b29cf2d914006d8.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-fa7481b421634aa39569488f00cf0d0a.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-735761333d0c47518ce2e1ab51c37a5d.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-d6a9c45e0beb433ea86dd3a5477dff7f.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-b223e98a40f24214aaf5305a9bbdaba5.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-ea98ad185c6c49ed83eda3dce237e995.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <Avatar
                                alt="Pizza Hut"
                                src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-de1d52731f59447489677acf6d349f5f.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Grid>
                    </Grid>
                </Paper>


            </div>
        )
    }
}

AppVendor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppVendor);
