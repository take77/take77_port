import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    forBreakPoint: {
        display: 'inline-block',
    }
});

const TopParagraph = () => {
    const classes = useStyles();

    return (
        <Typography>
            <span className={classes.forBreakPoint}>サービスを立ち上げては</span><span className={classes.forBreakPoint}>つぶしたり、</span><span className={classes.forBreakPoint}>ソロキャンしたりPC作ったり、</span><span className={classes.forBreakPoint}>幅広く手を伸ばしている</span><br /><span className={classes.forBreakPoint}>大学卒業間近の男の寄港地。</span><br /><span>気軽にお声掛けください。</span>
        </Typography>
    )
}

export default TopParagraph;
