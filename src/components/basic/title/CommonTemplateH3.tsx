import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    heddingStyles: {
        position: 'relative',
        paddingBottom: '-.2em',
        margin: '1.8em auto .75em',
        '&:before': {
            position: 'absolute',
            content: '""',
            bottom: '-0.2em',
            left: '0',
            zIndex: 2,
            width: '24%',
            height: '.2em',
            background: 'rgba(255, 255, 255, .8)',
        },
        '&:after': {
            position: 'absolute',
            content: '""',
            bottom: '-0.2em',
            left: '0',
            width: '72%',
            height: '.2em',
            background: 'repeating-linear-gradient(-45deg, rgba(255, 255, 255, .6), rgba(255, 255, 255, .6) 2px, rgba(255, 255, 255, .3) 2px, rgba(255, 255, 255, .3) 4px)',
        },
    },
})

const CommonTemplateH3 = ({ content }) => {
    const classes = useStyles();

    return (
        <Typography variant='h3' className={classes.heddingStyles}>
            { content }
        </Typography>
    )
}

export default CommonTemplateH3;
