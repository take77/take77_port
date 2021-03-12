import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const useStyles = makeStyles({
    iconsBox: {
        margin: '3em 0',
    },
    iconBox: {
        textAlign: 'center',
    },
    icon: {
        color: '#ffffff',
    }
});

const IconLinkBox = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.iconsBox}>
            <Grid xs={3} className={classes.iconBox}>
                <IconButton href='https://twitter.com/take77_main'>
                    <TwitterIcon fontSize="large" className={classes.icon} />
                </IconButton>
            </Grid>
            <Grid xs={3} className={classes.iconBox}>
                <IconButton href='https://www.facebook.com/profile.php?id=100009816691963'>
                    <FacebookIcon fontSize="large" className={classes.icon} />
                </IconButton>
            </Grid>
            <Grid xs={3} className={classes.iconBox}>
                <IconButton href='https://note.com/take77_note'>
                    <InsertDriveFileOutlinedIcon fontSize="large" className={classes.icon} />
                </IconButton>
            </Grid>
            <Grid xs={3} className={classes.iconBox}>
                <IconButton href='https://github.com/take77'>
                    <GitHubIcon fontSize="large" className={classes.icon} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default IconLinkBox
