import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    appBarStyles: {
        backgroundColor: 'transparent',
        width: '100%'
    },
    linkStyles: {
        textDecoration: 'none',
        color: '#ffffff',
    },
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.appBarStyles} elevation={0}>
            <Toolbar>
                <Link to='/' className={classes.linkStyles}>
                    <Typography variant='h1'>take77's port</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
