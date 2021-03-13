import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

type MetaPropsType = {
    title: string;
    description: string;
    OgImage?: 'Contact.jpg' | 'Develop.jpg' | 'Hobby.jpg' | 'Graphic.jpg' | 'Service.jpg'| 'Other.jpg' | 'DefaultImage.jpg' | '404.jpg';
    top?: boolean;
    post?: boolean;
};

const Meta: React.FC<MetaPropsType> = ({title, description, OgImage, top, post}) => {
    const data = useStaticQuery(graphql`
    query {
        images: allFile {
          nodes {
            relativePath
            name
            childImageSharp {
                fluid {
                    src
                }
            }
          }
        }
    }`)

    OgImage || (OgImage = 'DefaultImage.jpg')

    const image = data.images.nodes.find(n => n.relativePath.includes(OgImage));

    return (
        <Helmet>
            <meta charSet='utf-8' />
            <title>{title} | take77's port </title>
            <meta name='description' content={description} />
            <meta property='og:type' content={top ? 'website' : 'article'} />
            <meta property='og:site_name' content="take77's port" />
            <meta property='og:title' content={title} />
            {/* fixMe: fix path after deploy */}
            <meta property='og:image' content={post ? `http:${OgImage}` : `https://take77s-port.netlify.app${image.childImageSharp.fluid.src}`} />
            <meta property='og:description' content={description} />
            <meta property='og:type' content='website' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='tiwitter:title' content={`${title} | take77's port`} />
            <meta name='twitter:description' content={description} />
            <meta name="google-site-verification" content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION_KEY} />
        </Helmet>
    )
};

export default Meta;
