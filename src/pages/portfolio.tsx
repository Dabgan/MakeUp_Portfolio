import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';

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

const Portfolio: React.FC<Articles> = ({ data }) => {
    const { edges } = data.articles;
    return (
        <Layout>
            <div>
                <h1>Portfolio</h1>
                <p>Now go build something great.</p>
                {edges.map(edge => {
                    const { id, slug, title } = edge.node;
                    return (
                        <div key={id}>
                            <Link to={`./${slug}`}>{title}</Link>
                            <br />
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export default Portfolio;

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
