import React from 'react';
import { navigate } from "@reach/router"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import contentOmit from '@/others/ommitted';

const useStyles = makeStyles({
    cardStyles: {
        borderRadius: 0,
        margin: '1em'
    },
    cardMediaStyles: {
        width: '100%',
        height: '24vh'
    },
    cardTitle: {
        color: '#2E2E30',
        fontWeight: 600,
    },
    cardDescription: {
        color: '#2E2E30',
        fontSize: DescFontSize => `${DescFontSize}px`,
    },
})

const PostsListItemCard = ({ post, pathname }) => {
    const handleOnClick = (url, pathname) => navigate(`/${pathname}/${url}`);
    const eyeCatch = getImage(post.node.eyeCatch);

    const inXs = useMediaQuery('(max-width: 600px)');
    const inSm = useMediaQuery('(max-width: 960px)');
    const overMd = useMediaQuery('(max-width: 1280px)');

    let DescFontSize: number;
    if (inXs) {
        DescFontSize = 14
    } else if (inSm) {
        DescFontSize = 16
    } else if (overMd) {
        DescFontSize = 18
    }

    const classes = useStyles(DescFontSize);

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card elevation={0} className={classes.cardStyles}>
                <CardActionArea onClick={() => handleOnClick(post.node.url, pathname)}>
                    <CardMedia>
                        <GatsbyImage image={eyeCatch} alt={`${post.node.title} eyeCatch`} className={classes.cardMediaStyles} />
                    </CardMedia>
                    <CardContent>
                        <Typography className={classes.cardTitle} variant='h3'>{ post.node.title }</Typography>
                        <Typography className={classes.cardDescription}>{ contentOmit(post.node.description, 36) }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
};

export default PostsListItemCard;
