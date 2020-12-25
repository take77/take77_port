import React from 'react';
import { makeStyles } from '@material-ui/core';

require('typeface-jost');

const useStyles = makeStyles({
    title: {
        fontFamily: '"jost", sans-serif',
        color: '#ffffff',
    }
})

const TopTitle = () => {
    const classes = useStyles();

    return (
        <h1 className={classes.title}>take77's port</h1>
    );
}

export default TopTitle;
