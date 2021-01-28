import React from 'react';
import { makeStyles } from '@material-ui/core';

import HexagonLinkBlock from '../basic/display/HexagonLinkBlock';

import Intro from '@/images/Intro.jpg';
import Service from '@/images/Service.jpg';
import Develop from '@/images/Develop.jpg';
import Movie from '@/images/Movie.jpg';
import Hobby from '@/images/Hobby.jpg';
import Contact from '@/images/Contact.jpg';

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
                <HexagonLinkBlock fileName='Intro.jpg' name='Intro' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_02}`}>
                <HexagonLinkBlock fileName='Service.jpg' name='Service' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_03}`}>
                <HexagonLinkBlock fileName='Develop.jpg' name='Develop' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_04}`}>
                <HexagonLinkBlock fileName='Movie.jpg' name='Movie' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_05}`}>
                <HexagonLinkBlock fileName='Hobby.jpg' name='Hobby' />
            </div>
            <div className={`${classes.linkBlockCommon} ${classes.linkBlock_06}`}>
                <HexagonLinkBlock fileName='Contact.jpg' name='Contact' />
            </div>
        </div>
    );
};

export default PCLinkBox;
