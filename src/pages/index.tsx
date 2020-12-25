import React from 'react';
import { PageProps } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import '../others/layout.css';

import PCLinkBox from '@/components/section/PCLinkBox'
import TopTitle from '@/components/basic/title/TopTitle';
import TopParagraph from '@/components/basic/paragraph/TopParagraph';
import IconLinkBox from '@/components/section/IconLInkBox';

const useStyles = makeStyles({
    mainContainer: {
        height: '100vh',
        background: 'linear-gradient(60deg, #2b5164, #613563)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox: {
        margin: '2em',
        maxWidth: '1280px',
        minHeight: '530px',
    },
})

const Home: React.FC<PageProps> = () => {
    const classes = useStyles();

    return (
    <main className={classes.mainContainer}>
        <Grid container alignItems='center' className={classes.contentBox}>
            <Grid sm={12} md={8} lg={6}>
                <PCLinkBox />
            </Grid>
            <Grid sm={12} md={4} lg={6}>
                <TopTitle />
                <TopParagraph />
                <IconLinkBox />
            </Grid>
        </Grid>
    </main>
    )
};

export default Home;
