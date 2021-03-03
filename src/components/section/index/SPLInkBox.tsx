import React from 'react';
import { makeStyles } from '@material-ui/core';

import HexagonLinkBlock from '../../basic/display/HexagonLinkBlock';

const useStyles = makeStyles({
    linksBox: {
        position: 'relative',
        height: '1018px',
        width: '275px',
        margin: '0 auto'
    },
    linkBlockCommon: {
        position: 'absolute',
    },
    linkBlock_01: {
        top: 0,
        left: 0,
    },
    linkBlock_02: {
        top: '162px',
        left: '99px',
    },
    linkBlock_03: {
        top: '324px',
        left: 0,
    },
    linkBlock_04: {
        top: '486px',
        left: '99px',
    },
    linkBlock_05: {
        top: '648px',
        left: 0,
    },
    linkBlock_06: {
        top: '810px',
        left: '99px',
    },
});

const SPLinkBox = () => {
    const classes = useStyles();

    return (
        <div className={classes.linksBox}>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_01}`}>
                <HexagonLinkBlock fileName='Intro.jpg' name='Intro' linkTo='/intro' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_02}`}>
                <HexagonLinkBlock fileName='Service.jpg' name='Service' linkTo='/services' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_03}`}>
                <HexagonLinkBlock fileName='Develop.jpg' name='Develop' linkTo='/developments' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_04}`}>
                <HexagonLinkBlock fileName='Video.jpg' name='Video' linkTo='/videos' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_05}`}>
                <HexagonLinkBlock fileName='Hobby.jpg' name='Hobby' linkTo='/hobbies' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_06}`}>
                <HexagonLinkBlock fileName='Contact.jpg' name='Contact' linkTo='/contact' />
            </div>
        </div>
    )
}

export default SPLinkBox;
