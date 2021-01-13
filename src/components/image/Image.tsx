import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './image.module.scss';

const Image: React.FC = () => {
    const query = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "hero-mobile.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 420) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }
    `);

    const imgSrc = query.src.childImageSharp.fluid;

    return (
        <Img
            className={styles.image}
            fluid={imgSrc}
            imgStyle={{ objectFit: 'cover' }}
            alt="lady in makeup"
        />
    );
};

export default React.memo(Image);
