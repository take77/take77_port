import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Layout from '@/components/others/Layout';
import CommonTemplateH1 from '@/components/basic/title/CommonTemplateH1';
import CommonTemplateH2 from '@/components/basic/title/CommonTemplateH2';
import CommonTemplateH3 from '@/components/basic/title/CommonTemplateH3';
import CommonTemplateParagraph from '@/components/basic/paragraph/CommonTemplateParagraph';
import CommonTemplateCode from '@/components/basic/inline/CommonTemplateCode';
import CommonTemplateQuote from '@/components/basic/paragraph/CommonTemplateQuote';
import CommonTemplateUl from '@/components/basic/list/CommonTemplateUl';
import CommonTemplateOl from '@/components/basic/list/CommonTemplateOl';
import CommonEntryCard from '@/components/parts/CommonEntryCard';
import CommonArticleInfo from '@/components/parts/CommonArticleInfo';
import Meta from '@/components/section/common/Meta';
import CommonTemplateCodeBlock from '@/components/basic/paragraph/CommonTemplateCodeBlock';

const useStyles = makeStyles({
    eyeCatchStyles: {
        width: '100%',
        height: '24vh',
    },
    articleContentBox: {
        width: '90%',
        maxWidth: '1080px',
        margin: '2em auto'
    },
});

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: ( node, children ) => {
            console.log(node);
            console.log(children);
            if ( String(children[0]).includes('<Code Block>')) {
                return (
                    <CommonTemplateCodeBlock content={children} />
                )
            } else {
                return (
                    <CommonTemplateParagraph content={ children } />
                )
            };
        },
        [BLOCKS.HEADING_1]: ( node, children ) => <CommonTemplateH1 content={ children } />,
        [BLOCKS.HEADING_2]: ( node, children ) => <CommonTemplateH2 content={ children } />,
        [BLOCKS.HEADING_3]: ( node, children ) => <CommonTemplateH3 content={ children } />,
        [BLOCKS.HEADING_4]: ( node, children ) => <Typography variant='h4'>{ children }</Typography>,
        [BLOCKS.UL_LIST]: (node, children) => <CommonTemplateUl content={ children } />,
        [BLOCKS.OL_LIST]: (node, children) => <CommonTemplateOl content={ children } />,
        [BLOCKS.QUOTE]: (node, children) => <CommonTemplateQuote content={ children } />,
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
                <GatsbyImage
                    image={getImage(node.data.target)}
                    alt={ node.data.target.title }
                />
            )
        },
        [BLOCKS.EMBEDDED_ENTRY]: node => (
            <CommonEntryCard
                title={node.data.target.title}
                image={node.data.target.eyeCatch}
                typename={node.data.target.__typename}
                url={node.data.target.url}
            />
        )
    },
    renderMark: {
        [MARKS.CODE]: text => <CommonTemplateCode text={ text } />
    }
};

const CommonPostTemplate = ({ pageContext }) => {
    const { post } = pageContext;
    const eyeCatch = getImage(post.eyeCatch);
    const classes = useStyles();
    console.log(post)

    return (
        <Layout pathname=''>
            <Meta
                title={post.title}
                description={post.description}
                OgImage={post.eyeCatch.file.url}
                post
            />
            <article>
                <GatsbyImage
                    image={eyeCatch}
                    alt={`${post.title} eyeCatch`}
                    className={classes.eyeCatchStyles}
                />
                <CommonArticleInfo
                    title={post.title}
                    createdAt={post.createdAt}
                />
                <section className={classes.articleContentBox}>
                    {post.content && renderRichText(post.content, options)}
                </section>
            </article>
        </Layout>
    )
};

export default CommonPostTemplate;
