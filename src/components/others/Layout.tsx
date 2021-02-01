import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import '@/others/layout.css';
import theme from '@/others/theme';

import Header from '../section/common/Header';
import Footer from '../section/common/Footer';

const useStyles = makeStyles({
    mainContainer: {
        minHeight: '100vh',
        background: 'linear-gradient(60deg, #2b5164, #613563)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.mainContainer}>
                <Header />
                <main>
                    { children }
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Layout;
