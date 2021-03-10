import React from 'react';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles({
    articleInfoBox: {
        width: '90%',
        maxWidth: '1080px',
        margin: '3vw auto',
    },
    articleTitle: {
        margin: '.5em 0'
    },
    articleCreatedDate: {
        display: 'flex',
        alignItems: 'center',
        margin: '.5em 0'
    },
    dateIcon: {
        color: '#ffffff',
    },
});

const useSPStyles = makeStyles({
    dateText: {
        fontSize: '.8em'
    },
    dateIcon: {
        marginRight: '.25em',
        width: '.8em',
        height: '.8em',
    },
});

const usePCStyles = makeStyles({
    dateText: {
        fontSize: '1em'
    },
    dateIcon: {
        marginRight: '.75em',
        width: '1em',
        height: '1em',
    },
});

const CommonArticleInfo = ({ title, createdAt }) => {
    const inXs = useMediaQuery('(max-width: 600px)');
    const classes = useStyles();
    const dividedClasses = inXs ? useSPStyles() : usePCStyles();

    return (
        <div className={classes.articleInfoBox}>
            <Typography variant='h1'>{title}</Typography>
            <div className={classes.articleCreatedDate}>
                <DateRangeIcon className={`${classes.dateIcon} ${dividedClasses.dateIcon}`} />
                <Typography className={dividedClasses.dateText}>{createdAt}</Typography>
            </div>
        </div>
    );
};

export default CommonArticleInfo;
