import React from 'react';
import { makeStyles } from '@material-ui/core';

import HexagonLinkBlock from '../../basic/display/HexagonLinkBlock';

const useStyles = makeStyles({
    linksBox: {
        position: 'relative',
        height: '530px',
        width: '477px',
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
        top: 0,
        left: '198px',
    },
    linkBlock_03: {
        top: '162px',
        left: '99px',
    },
    linkBlock_04: {
        top: '162px',
        left: '297px',
    },
    linkBlock_05: {
        top: '324px',
        left: 0,
    },
    linkBlock_06: {
        top: '324px',
        left: '198px',
    },
})

const PCLinkBox = () => {
    const classes = useStyles();

    return (
        <div className={classes.linksBox}>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_01}`}>
                <HexagonLinkBlock fileName='Service.jpg' name='Service' linkTo='/services' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_02}`}>
                <HexagonLinkBlock fileName='Develop.jpg' name='Develop' linkTo='/developments' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_03}`}>
                <HexagonLinkBlock fileName='Graphic.jpg' name='Graphic' linkTo='/graphics' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_04}`}>
                <HexagonLinkBlock fileName='Hobby.jpg' name='Hobby' linkTo='/hobbies' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_05}`}>
                <HexagonLinkBlock fileName='Other.jpg' name='Other' linkTo='/others' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_06}`}>
                <HexagonLinkBlock fileName='Contact.jpg' name='Contact' linkTo='/contact' />
            </div>
        </div>
    );
};

export default PCLinkBox;
