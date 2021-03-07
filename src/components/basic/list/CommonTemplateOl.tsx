import React from 'react'

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    listStyle: {
        color: '#ffffff'
    }
});

const CommonTemplateOl = ({ content }) => {
    const classes = useStyles();

    return (
        <ul className={classes.listStyle}>
            { content }
        </ul>
    );
};

export default CommonTemplateOl;
