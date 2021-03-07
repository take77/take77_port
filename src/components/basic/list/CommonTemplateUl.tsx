import React from 'react'

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    listStyle: {
        color: '#ffffff'
    }
});

const CommonTemplateUl = ({ content }) => {
    const classes = useStyles();

    return (
        <ul className={classes.listStyle}>
            { content }
        </ul>
    );
};

export default CommonTemplateUl;
