import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type PropsType = {
  fileName: 'Contact.jpg' | 'Develop.jpg' | 'Hobby.jpg' | 'Graphic.jpg' | 'Service.jpg'| 'Other.jpg' | '404.jpg';
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
              gatsbyImageData
            }
          }
        }
    }`)

    const image = data.images.nodes.find(n => n.relativePath.includes(props.fileName))

    return <GatsbyImage
      image={getImage(image)}
      alt={props.alt}
      className={props.styles}
      />
  }

  export default Image
