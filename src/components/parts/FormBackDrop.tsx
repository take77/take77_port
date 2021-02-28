import React from 'react';
import { useAtom } from 'jotai';

import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { backDropStatus } from '@/others/atoms';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const FormBackDrop = () => {
    const backDropOpen = useAtom(backDropStatus)[0];
    const classes = useStyles();

    return (
        <div>
            <Backdrop  className={classes.backdrop} open={backDropOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
};

export default FormBackDrop;
