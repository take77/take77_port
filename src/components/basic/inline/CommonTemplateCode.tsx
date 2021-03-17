// code is inline item... so, here is too bad to put in...

import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    codeStyles: {
        fontFamily: '"Roboto Mono", sans-serif',
    },
});

const CommonTemplateCode = ({ text }) => {
    const classes = useStyles();

    return (
        <code className={classes.codeStyles}>
            { text }
        </code>
    );
};

export default CommonTemplateCode;
