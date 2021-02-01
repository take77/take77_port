import React from 'react';

import { makeStyles } from '@material-ui/core';

type Props ={
    styles?: string;
}

const useStyles = makeStyles({
    footerStyles: {
        padding: '2rem',
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 'auto',
        fontSize: 12,
        width: '100%',
        boxSizing: 'border-box'
    }
});

const Footer: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <footer className={`${classes.footerStyles} ${props.styles}`}>
            © {new Date().getFullYear()} take77 all rights reserved.
        </footer>
    )
};

export default Footer;
