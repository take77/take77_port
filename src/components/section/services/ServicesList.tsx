import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import PostsListItemCard from '@/components/parts/PostsListItemCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    serviceListBox: {
        margin: '1em auto',
        width: '90%',
    }
})

const ServicesList = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulServicePost(filter: {url: {ne: "dummy"}},sort: {order: DESC, fields: createdAt}) {
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

    const posts = data.allContentfulServicePost.edges;
    const classes = useStyles();

    return (
        <section className={classes.serviceListBox}>
            <Grid container>
                {
                    posts.length ?
                        posts.map(post =>
                            <PostsListItemCard post={post} pathname={'services'} />
                        ) :
                        <Typography>このカテゴリーにはまだ投稿がありません。</Typography>
                }
            </Grid>
        </section>
    )
}

export default ServicesList;
