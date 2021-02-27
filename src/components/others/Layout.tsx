import React from 'react';
import { Provider } from 'jotai';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import '@/others/layout.css';
import theme from '@/others/theme';

import Header from '../section/common/Header';
import Footer from '../section/common/Footer';
import HexagonFab from '../basic/display/HexagonFab';
import MenuDialog from '../section/common/MenuDrawer';

type LayoutProps = {
    pathname: string;
    children: any;
}

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

const Layout: React.FC<LayoutProps> = ({ pathname, children }) => {
    const classes = useStyles();

    return (
        <Provider>
            <ThemeProvider theme={theme}>
                <div className={classes.mainContainer}>
                    <Header />
                    <main>
                        { children }
                    </main>
                    <HexagonFab />
                    <MenuDialog pathname={ pathname } />
                    <Footer />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default Layout;
