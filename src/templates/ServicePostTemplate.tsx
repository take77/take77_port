import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

import { makeStyles } from '@material-ui/core';
import Layout from '@/components/others/Layout';

const useStyles = makeStyles({
    eyeCatchStyles: {
        width: '75%',
        height: '100%',
    },
})

const ServicePostTemplate = ({ pageContext }) => {
    const { post } = pageContext;
    const eyeCatch = getImage(post.eyeCatch);
    const classes = useStyles();

    return (
        <Layout pathname=''>
            <p>title: {post.title}</p>
            <GatsbyImage
                image={eyeCatch}
                alt={`${post.title} eyeCatch`}
                className={classes.eyeCatchStyles}
            />
            <p>create: {post.createdAt}</p>
            {post.content && renderRichText(post.content)}
        </Layout>
    )
};

export default ServicePostTemplate;
