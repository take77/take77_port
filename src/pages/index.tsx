import React from 'react';
import { PageProps } from 'gatsby';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'

import IndexLayout from '@/components/others/IndexLayout';
import PCLinkBox from '@/components/section/index/PCLinkBox';
import SPLinkBox from '@/components/section/index/SPLInkBox';
import TopTitle from '@/components/basic/title/TopTitle';
import TopParagraph from '@/components/basic/paragraph/TopParagraph';
import IconLinkBox from '@/components/section/index/IconLInkBox';
import Meta from '@/components/section/common/Meta';

const useStyles = makeStyles({
    indexBox: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    contentBox: {
        padding: '2em',
        maxWidth: '1280px',
        minHeight: '530px',
    },
})

const Home: React.FC<PageProps> = () => {
    const classes = useStyles();

    return (
    <IndexLayout>
        <Meta
            title='Top'
            description='サービスを立ち上げてはつぶしたり、ソロキャンしたりPC作ったり、幅広く手を伸ばしている大学卒業間近の男の寄港地。気軽にお声掛けください。'
            top
        />
        <div className={classes.indexBox}>
            <Grid container alignItems='center' className={classes.contentBox}>
                <Hidden xsDown>
                    <Grid xs={12} md={8} lg={6}>
                        <PCLinkBox />
                    </Grid>
                </Hidden>
                <Grid xs={12} md={4} lg={6}>
                    <TopTitle />
                    <TopParagraph />
                    <IconLinkBox />
                </Grid>
                <Hidden smUp>
                    <Grid xs={12}>
                        <SPLinkBox />
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    </IndexLayout>
    )
};

export default Home;
