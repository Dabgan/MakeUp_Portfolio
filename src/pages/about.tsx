import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/SEO/seo';

interface AboutDatoCms {
    data: {
        about: {
            title: string;
            description: string;
        };
    };
}

const AboutPage: React.FC<AboutDatoCms> = ({ data }) => {
    const { title, description } = data.about;

    return (
        <Layout>
            <SEO title="About Page" />
            <h1>{title}</h1>
            <p>{description}</p>
        </Layout>
    );
};

export const query = graphql`
    query {
        about: datoCmsAbout {
            description
            title
        }
    }
`;
export default AboutPage;
