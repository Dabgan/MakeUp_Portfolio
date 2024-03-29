import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO/Seo';
import Layout from '../components/layout/Layout';
import Carousel from '../components/carousel/Carousel';
import styles from '../assets/styles/pages/portfolio.module.scss';

interface Articles {
    data: {
        projects: {
            edges: [];
        };
    };
}

const Portfolio: React.FC<Articles> = ({ data }) => {
    const { edges } = data.projects;
    return (
        <Layout limitedHeight marginTopZero>
            <SEO title="Portfolio" />
            <div className={styles.carouselContainer}>
                <Carousel projects={edges}></Carousel>
            </div>
        </Layout>
    );
};

export default React.memo(Portfolio);

export const query = graphql`
    query {
        projects: allDatoCmsPortfolioProject {
            edges {
                node {
                    title
                    description
                    position
                    image {
                        fluid(maxWidth: 2400) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    thumb: image {
                        fixed(width: 150, height: 150) {
                            ...GatsbyDatoCmsFixed
                        }
                    }
                }
            }
        }
    }
`;
