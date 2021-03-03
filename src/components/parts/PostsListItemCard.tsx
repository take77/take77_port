import React from 'react';
import { navigate } from "@reach/router"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    cardStyles: {
        borderRadius: 0,
    },
    cardMediaStyles: {
        width: '100%',
    }
})

const PostsListItemCard = ({ post, pathname }) => {
    const handleOnClick = (url, pathname) => navigate(`/${pathname}/${url}`);
    const eyeCatch = getImage(post.node.eyeCatch);
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card elevation={0} className={classes.cardStyles}>
                <CardActionArea onClick={() => handleOnClick(post.node.url, pathname)}>
                    <CardMedia>
                        <GatsbyImage image={eyeCatch} alt={`${post.node.title} eyeCatch`} className={classes.cardMediaStyles} />
                    </CardMedia>
                    <CardContent>
                        <Typography>{ post.node.title }</Typography>
                        <Typography>{ post.node.description }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
};

export default PostsListItemCard;
