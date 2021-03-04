import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import PostsListItemCard from '@/components/parts/PostsListItemCard';

const useStyles = makeStyles({
    developmentListBox: {
        margin: '1em auto',
        width: '90%'
    }
})

const DevelopmentsList = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulDevelopmentPost(sort: {order: DESC, fields: createdAt}) {
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

    const posts = data.allContentfulDevelopmentPost.edges;
    const classes = useStyles();

    return (
        <section className={classes.developmentListBox}>
            <Grid container alignItems='center'>
                {posts.map(post => <PostsListItemCard post={post} pathname={'developments'} />)}
            </Grid>
        </section>
    )
}

export default DevelopmentsList;
