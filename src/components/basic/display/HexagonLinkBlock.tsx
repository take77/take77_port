import React from 'react';
import { makeStyles } from '@material-ui/core';

type PropsType = {
    image:  any;
    name: string;
}

const useStyles = makeStyles({
    fitering: {
        filter: 'drop-shadow(6px 6px 0px #3e3e3e)',
    },
    imageClipPath: {
        width: '174px',
        height: '200px',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25% )',
    },
    imageAdjust: {
        width: '174px',
        height: '200px',
        objectFit: 'cover',
    },
});

const HexagonLinkBlock = (props: PropsType) => {
    const classes = useStyles();

    return (
        <div className={classes.fitering}>
            <div className={classes.imageClipPath}>
                <img src={props.image} alt={props.name} className={classes.imageAdjust} />
            </div>
        </div>
    )
};

export default HexagonLinkBlock;
