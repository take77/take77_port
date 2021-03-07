import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import DateRangeIcon from '@material-ui/icons/DateRange';

import Layout from '@/components/others/Layout';
import CommonTemplateH1 from '@/components/basic/title/CommonTemplateH1';
import CommonTemplateH2 from '@/components/basic/title/CommonTemplateH2';
import CommonTemplateH3 from '@/components/basic/title/CommonTemplateH3';
import CommonTemplateParagraph from '@/components/basic/paragraph/CommonTemplateParagraph';
import CommonTemplateCode from '@/components/basic/paragraph/CommonTemplateCode';
import CommonTemplateQuote from '@/components/basic/paragraph/CommonTemplateQuote';
import CommonTemplateUl from '@/components/basic/list/CommonTemplateUl';
import CommonTemplateOl from '@/components/basic/list/CommonTemplateOl';
import CommonEntryCard from '@/components/parts/CommonEntryCard';

const useStyles = makeStyles({
    eyeCatchStyles: {
        width: '100%',
        height: '24vh',
    },
    articleInfoBox: {
        width: '90%',
        maxWidth: '1080px',
        margin: '3vw auto',
    },
    articleTitle: {
        margin: '.5em 0'
    },
    articleCreatedDate: {
        display: 'flex',
        alignItems: 'center',
        margin: '.5em 0'
    },
    dateIcon: {
        color: '#ffffff',
    },
    articleContentBox: {
        width: '90%',
        maxWidth: '1080px',
        margin: '2em auto'
    },
    articleContentUl: {
        color: '#ffffff',
    },
    articleContentOl: {
        color: '#ffffff',
    },
});

const useSPStyles = makeStyles({
    dateText: {
        fontSize: '.8em'
    },
    dateIcon: {
        marginRight: '.25em',
        width: '.8em',
        height: '.8em',
    },
});

const usePCStyles = makeStyles({
    dateText: {
        fontSize: '1em'
    },
    dateIcon: {
        marginRight: '.75em',
        width: '1em',
        height: '1em',
    },
});

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: ( node, children ) => <CommonTemplateParagraph content={ children } />,
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
    const inXs = useMediaQuery('(max-width: 600px)');
    const classes = useStyles();
    const dividedClasses = inXs ? useSPStyles() : usePCStyles();

    return (
        <Layout pathname=''>
            <article>
                <GatsbyImage
                    image={eyeCatch}
                    alt={`${post.title} eyeCatch`}
                    className={classes.eyeCatchStyles}
                />
                <div className={classes.articleInfoBox}>
                    <Typography variant='h1'>{post.title}</Typography>
                    <div className={classes.articleCreatedDate}>
                        <DateRangeIcon className={`${classes.dateIcon} ${dividedClasses.dateIcon}`} />
                        <Typography className={dividedClasses.dateText}>{post.createdAt}</Typography>
                    </div>
                </div>
                <section className={classes.articleContentBox}>
                    {post.content && renderRichText(post.content, options)}
                </section>
            </article>
        </Layout>
    )
};

export default CommonPostTemplate;
