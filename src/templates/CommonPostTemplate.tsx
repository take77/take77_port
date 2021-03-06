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
});

const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <GatsbyImage
            image={getImage(node.data.target)}
            alt={ node.data.title }
        />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: node => {
          console.log(node)
          return (
            <div>
                <p>title: {node.data.target.title}</p>
                <p>description: {node.data.target.description}</p>
                <GatsbyImage
                    image={getImage(node.data.target.eyeCatch)}
                    alt={`${node.data.target.title} eye catch`}
                />
                <p>url: {node.data.target.url}</p>
                <p>typename: {node.data.target.__typename}</p>
            </div>
          )
        }
    },
  }

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
            {post.content && renderRichText(post.content, options)}
        </Layout>
    )
};

export default ServicePostTemplate;
