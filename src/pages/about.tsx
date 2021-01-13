import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/SEO/seo';
import Title from '../components/title/Title';

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
            <Title glowing={false}>{title}</Title>
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
export default React.memo(AboutPage);
