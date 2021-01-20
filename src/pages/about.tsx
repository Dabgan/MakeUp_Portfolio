import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';
import { useMediaQuery } from '@react-hook/media-query';

import Layout from '../components/layout/layout';
import SEO from '../components/SEO/seo';
import Title from '../components/title/Title';
import styles from '../assets/styles/pages/about.module.scss';

interface AboutDatoCms {
    data: {
        about: {
            title: string;
            description: string;
            photo: GatsbyImageFluidProps;
        };
    };
}

const AboutPage: React.FC<AboutDatoCms> = ({ data }) => {
    const { title, description, photo } = data.about;
    const matched = useMediaQuery('(min-width: 1024px)');
    const [infoContainer, setInfoContainer] = useState<boolean>(matched);

    useEffect(() => {
        setInfoContainer(matched);
    }, [matched]);

    return (
        <Layout>
            <SEO title="About Page" />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {infoContainer ? (
                        <div className={styles.innerWrapper}>
                            <div className={styles.info}>
                                <Title>{title}</Title>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                            <Img className={styles.image} fluid={photo.fluid} />
                        </div>
                    ) : (
                        <>
                            <Title>{title}</Title>
                            <Img className={styles.image} fluid={photo.fluid} />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        about: datoCmsAbout {
            description
            title
            photo {
                fluid(maxWidth: 1200) {
                    ...GatsbyDatoCmsFluid
                }
            }
        }
    }
`;
export default React.memo(AboutPage);
