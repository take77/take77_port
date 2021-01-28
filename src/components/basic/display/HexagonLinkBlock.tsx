import React from 'react';
import { makeStyles } from '@material-ui/core';

import Image from './Image';

type PropsType = {
    fileName:  string;
    name: string;
}

const useStyles = makeStyles({
    fitering: {
        filter: 'drop-shadow(0px 3px 1px rgb(0 0 0 / 20%)) drop-shadow(0px 2px 2px rgb(0 0 0 / 14%)) drop-shadow(0px 1px 5px rgb(0 0 0 / 12%))',
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
                <Image
                    fileName={props.fileName}
                    alt={props.name}
                    styles={classes.imageAdjust}
                />
            </div>
        </div>
    )
};

export default HexagonLinkBlock;
