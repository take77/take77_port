import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import PostsListItemCard from '@/components/parts/PostsListItemCard';

const useStyles = makeStyles({
    hobbyListBox: {
        margin: '1em auto',
        width: '90%',
    }
})

const HobbiesList = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulHobbyPost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
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

    const posts = data.allContentfulHobbyPost.edges;
    const classes = useStyles();

    return (
        <section className={classes.hobbyListBox}>
            <Grid container>
                {posts.map(post => <PostsListItemCard post={post} pathname={'hobbies'} />)}
            </Grid>
        </section>
    )
}

export default HobbiesList;
