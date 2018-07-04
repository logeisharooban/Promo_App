import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import classnames from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
    card: {
        maxWidth: '100%',
        marginTop: 20,
        marginBottom: 60,
        display: 'inline-block'
    },
    media: {
        height: '100%',
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
        backgroundColor: grey[500]
    },
    bigAvatar: {
        width: 60,
        height: '100%'
    }
});

class AppCard extends React.Component {

    state = {
        expanded: false
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded}));
    };

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                  <Avatar
                            alt="Commercial Bank"
                            src="https://promolk.blob.core.windows.net/profiles/small/promo.lk-promo-3fd6bfed1b364d2fab1069e9eb4b888e.jpg"
                            className={classnames(classes.avatar, classes.bigAvatar)}
                        />
                }
                        action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                        title="Enjoy 30% Off for HNB, HSBC and NTB Amex Cardholders at Mahaweli Reach Hotel"
                        subheader="September 15, 2018"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://promolk.blob.core.windows.net/promotions/promo.lk-promo-4699b7aa0b5e4ae5b633d12eef99526e.jpg"
                        title="Arpico"
                    />
                    <CardContent>
                        <Typography component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now
                            use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                            web sites still in their infancy. Various versions have evolved over the years, sometimes
                            by accident, sometimes on purpose (injected humour and the like).
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

AppCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppCard);
//export default AppSwipeableDrawer;