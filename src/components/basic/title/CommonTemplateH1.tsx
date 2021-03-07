import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    heddingStyles: {
        margin: '.75em auto',
    }
})

const CommonTemplateH1 = ({ content }) => {
    const classes = useStyles();

    return (
        <Typography variant='h1' className={classes.heddingStyles}>
            { content }
        </Typography>
    )
}

export default CommonTemplateH1;
