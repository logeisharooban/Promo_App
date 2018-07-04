import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const styles = {
    root: {
        marginTop: 20,
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

function AppCategory(props) {
    const { classes } = props;

    return (
        <div>

            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={6} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350"
                            title="Food"
                        />
                        <CardContent>
                            <Typography variant="button" component="h4" align="center">
                                Restaurent
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&h=350"
                            title="Clothing"
                        />
                        <CardContent>
                            <Typography variant="button" component="h4" align="center">
                                Clothing
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&h=350"
                            title="Bank"
                        />
                        <CardContent>
                            <Typography variant="button" component="h4" align="center">
                                Bank
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/5205/food-healthy-vegetables-potatoes.jpg?auto=compress&cs=tinysrgb&h=350"
                            title="Supermarket"
                        />
                        <CardContent>
                            <Typography variant="button" component="h4" align="center">
                                Supermarket
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&h=350"
                            title="Travel"
                        />
                        <CardContent>
                            <Typography variant="button" component="h4" align="center">
                                Travel
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&h=350"
                            title="Electronics"
                        />
                        <CardContent>
                            <Typography variant="button" component="h4" align="center">
                                Electronics
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

AppCategory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppCategory);