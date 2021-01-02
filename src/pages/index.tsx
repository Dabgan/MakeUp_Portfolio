import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/SEO/seo';

interface Articles {
    data: {
        articles: {
            edges: Array<{
                node: {
                    title: string;
                    slug: string;
                    id: string;
                };
            }>;
        };
    };
}

const IndexPage: React.FunctionComponent<Articles> = ({ data }) => {
    const { edges } = data.articles;

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hello worldDDDDDDDDD</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            {edges.map(edge => {
                const { id, slug, title } = edge.node;
                return (
                    <div key={id}>
                        <Link to={slug}>{title}</Link>
                        <br />
                    </div>
                );
            })}
            <Link to="/about/">Go to about</Link> <br />
            <Link to="/contact/">Go to contact</Link> <br />
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        articles: allDatoCmsArticle {
            edges {
                node {
                    title
                    slug
                    id
                }
            }
        }
    }
`;
