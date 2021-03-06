import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PostsListItemCard from '@/components/parts/PostsListItemCard';

const useStyles = makeStyles({
    otherListBox: {
        margin: '1em auto',
        width: '90%',
    }
})

const OthersList = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulOtherPost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
                edges {
                    node {
                        url
                        title
                        description
                        eyeCatch {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    const posts = data.allContentfulOtherPost.edges;
    const classes = useStyles();

    return (
        <section className={classes.otherListBox}>
            <Grid container>
                {
                    posts.length ?
                        posts.map(post =>
                            <PostsListItemCard post={post} pathname={'others'} />
                        ) :
                        <Typography>このカテゴリーにはまだ投稿がありません。</Typography>
                }
            </Grid>
        </section>
    )
}

export default OthersList;
