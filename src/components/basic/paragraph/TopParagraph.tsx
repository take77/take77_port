import React from 'react';
import { makeStyles } from '@material-ui/core';

require('typeface-sawarabi-gothic');

const useStyles = makeStyles({
    desc: {
        fontFamily: '"Sawarabi Gothic", sans-serif',
        color: '#ffffff',
        lineHeight: '2em',
    },
    forBreakPoint: {
        display: 'inline-block',
    }
});

const TopParagraph = () => {
    const classes = useStyles();

    return (
        <p className={classes.desc}>
            <span>サービスを立ち上げてはつぶしたり、</span><span className={classes.forBreakPoint}>ソロキャンしたりPC作ったり、</span><br /><span className={classes.forBreakPoint}>幅広く手を伸ばしている</span><span className={classes.forBreakPoint}>大学卒業間近の男の寄港地。</span><br /><span>気軽にお声掛けください。</span>
        </p>
    )
}

export default TopParagraph;
