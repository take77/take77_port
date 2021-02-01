import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    appBarStyles: {
        backgroundColor: 'transparent',
        width: '100%'
    },
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.appBarStyles} elevation={0}>
            <Toolbar>
                <Typography variant='h1'>take77's port</Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
