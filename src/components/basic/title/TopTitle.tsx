import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typograpy from '@material-ui/core/Typography'

const useStyles = makeStyles({
    title: {
        fontWeight: 'bold',
    }
})

const TopTitle = () => {
    const classes = useStyles();

    return (
        <Typograpy variant='h1' className={classes.title}>take77's port</Typograpy>
    );
}

export default TopTitle;
