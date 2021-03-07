import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    paragraphStyles: {
        margin: '.5em auto',
    }
});

const CommonTemplateParagraph = ({ content }) => {
    const classes = useStyles();

    return (
        <Typography className={classes.paragraphStyles}>
            { content }
        </Typography>
    );
};

export default CommonTemplateParagraph;
