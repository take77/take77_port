import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
                <TwitterIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid xs={3} className={classes.iconBox}>
                <FacebookIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid xs={3} className={classes.iconBox}>
                <InsertDriveFileOutlinedIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid xs={3} className={classes.iconBox}>
                <GitHubIcon fontSize="large" className={classes.icon} />
            </Grid>
        </Grid>
    )
}

export default IconLinkBox
