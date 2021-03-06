import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import '@/others/layout.css';
import theme from '@/others/theme';

import Footer from '../section/common/Footer';

const useSPStyles = makeStyles({
    mainContainer: {
        background: 'linear-gradient(135deg, #362742 0%, #211829 100%)',
        position: 'relative',
    },
    footerStyles: {
        position: 'absolute',
        bottom: 0
    },
})

const usePCStyles = makeStyles({
    mainContainer: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #362742 0%, #211829 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerStyles: {},
})

const IndexLayout = ({ children }) => {
    const inSm = useMediaQuery('(min-width:600px)');
    const classes = inSm ? useSPStyles() : usePCStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.mainContainer}>
                <main>
                    { children }
                </main>
                <Footer styles={classes.footerStyles} />
            </div>
        </ThemeProvider>
    )
}

export default IndexLayout;
