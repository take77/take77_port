// code is inline item... so, here is too bad to put in...

import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    codeBoxStyle: {
        margin: '.5em auto',
        backgroundColor: '#211829',
        border: '1px solid #fdfdfd',
        padding: '.5em 1.5em',
        borderRadius: '1em'
    },
    codeStyles: {
        fontFamily: '"Roboto Mono", sans-serif',
        whiteSpace: 'pre-line',
        wordWrap: 'break-word'
    },
});

const CommonTemplateCode = ({ text }) => {
    const classes = useStyles();

    return (
        <div className={classes.codeBoxStyle}>
            <pre>
                <code className={classes.codeStyles}>
                    { text }
                </code>
            </pre>
        </div>
    );
};

export default CommonTemplateCode;
