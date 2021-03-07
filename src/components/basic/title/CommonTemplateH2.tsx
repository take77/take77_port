import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    heddingStyles: {
        position: 'relative',
        padding: '0 .25em .25em 2.4em',
        margin: '.75em auto',
        borderBottom: '1px solid rgba(255, 255, 255, .6)',
        '&:before': {
            position: 'absolute',
            content: '""',
            top: '.2em',
            left: '.2em',
            zIndex: 2,
            width: '1.1em',
            height: '1.1em',
            background: 'rgba(255, 255, 255, .6)',
            WebkitTransform: 'rotate(45deg)',
            transform: 'rotate(45deg)',
        },
        '&:after': {
            position: 'absolute',
            content: '""',
            top: '.8em',
            left: '.8em',
            width: '.8em',
            height: '.8em',
            background: 'rgba(255, 255, 255, .3)',
            WebkitTransform: 'rotate(45deg)',
            transform: 'rotate(45deg)',
        },
    }
})

const CommonTemplateH2 = ({ content }) => {
    const classes = useStyles();

    return (
        <Typography variant='h2' className={classes.heddingStyles}>
            { content }
        </Typography>
    )
}

export default CommonTemplateH2;
