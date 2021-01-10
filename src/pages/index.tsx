import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero/Hero';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO/seo';
import Button from '../components/button/Button';

const IndexPage: React.FunctionComponent = ({ data }) => {
    const imageData = data.desktop.childImageSharp.fluid;

    return (
        <>
            <Hero>
                <Layout>
                    <SEO title="Home" />
                    <h1 className="title">
                        Kinga Dąbrowska Superhero Make Up and XD
                    </h1>
                    <Img
                        className="image"
                        fluid={imageData}
                        imgStyle={{ objectFit: 'cover' }}
                    />
                    <Button>Portfolio</Button>
                </Layout>
            </Hero>
        </>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        desktop: file(relativePath: { eq: "hero-mobile.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 420) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
    }
`;
