import React from 'react';

import { makeStyles } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles({
    blockquoteBox: {
        borderLeft: '3px solid #fdfdfd',
        paddingLeft: '1em',
        fontStyle: 'italic'
    },
    blockquoteIcon: {
        color: '#ffffff',
        transform: 'rotate(180deg)'
    }
});

const CommonTemplateQuote = ({ content }) => {
    const classes = useStyles();

    return (
        <blockquote className={classes.blockquoteBox}>
            <FormatQuoteIcon className={classes.blockquoteIcon} />
            { content }
        </blockquote>
    )
}

export default CommonTemplateQuote;
