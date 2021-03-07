import React from 'react';
import { navigate } from "@reach/router"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const generateInternalLink = (typename, url) => {
    let pathname: 'services' | 'developments' | 'graphics' | 'hobbies';

    switch( typename ) {
        case 'ContentfulServicePost':
            pathname = 'services';
            break;
        case 'ContentfulDevelopmentPost':
            pathname = 'developments';
            break;
        case 'ContentfulGraphicPost':
            pathname = 'graphics';
            break;
        case 'ContentfulHobbyPost':
            pathname = 'hobbies';
            break;
        default:
            pathname = 'hobbies';
    }

    const linkTo = `/${pathname}/${url}`;

    return linkTo;
};

const useStyles = makeStyles({
    cardStyle: {
        borderRadius: 0,
        height: '24vh',
        maxHeight: '120px',
        margin: '1.5em auto',
    },
    cardBox: {
        display: 'flex',
        height: '100%',
        alignItems: 'center'
    },
    cardContent: {
        height: '100%',
        width: '64%',
        boxSizing: 'border-box',
        padding: '1.5em 2em',
        display: 'flex',
        alignItems: 'center'
    },
    entryTitle: {
        color: '#2E2E30',
        lineHeight: 1.8,
        fontWeight: 'bold',
    },
    entryDescription: {
        color: '#2E2E30',
        lineHeight: 1.8,
    },
    cardMedia: {
        height: '100%',
        width: '36%',
    },
    cardMediaContent: {
        height: '100%',
    }
});

const CommonEntryCard = ({
    title,
    image,
    typename,
    url,
}) => {
    const eyeCatch = getImage(image);
    const classes = useStyles();

    const handleOnClick = () => {
        navigate(generateInternalLink(typename, url));
    };

    return (
        <Card elevation={0} className={classes.cardStyle}>
            <CardActionArea className={classes.cardBox} onClick={handleOnClick}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.entryTitle}>
                        { title }
                    </Typography>
                </CardContent>
                <CardMedia className={classes.cardMedia}>
                    <GatsbyImage
                        image={ eyeCatch }
                        alt={`${title} eye catch`}
                        className={classes.cardMediaContent}
                    />
                </CardMedia>
            </CardActionArea>
        </Card>
    );
};

export default CommonEntryCard;
