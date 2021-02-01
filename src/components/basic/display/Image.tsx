import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

type PropsType = {
  fileName: 'Contact.jpg' | 'Develop.jpg' | 'Hobby.jpg' | 'Intro.jpg' | 'Video.jpg' | 'Service.jpg';
  alt: string;
  styles?: string;
}

const Image: React.FC<PropsType> = (props) => {
    const data = useStaticQuery(graphql`
    query {
        images: allFile {
          nodes {
            relativePath
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    }`)

    const image = data.images.nodes.find(n => n.relativePath.includes(props.fileName))

    return <Img
      fluid={image.childImageSharp.fluid}
      className={props.styles}
      imgStyle={{
        objectFit: "cover",
        objectPosition: "50% 50%",
      }}
      />
  }

  export default Image
