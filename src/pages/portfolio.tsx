import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Title from '../components/title/Title';
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

const Portfolio: React.FC<Articles> = () => {
    // const { edges } = data.articles;
    return (
        <Layout>
            <SEO title="Portfolio" />
            <div>
                <Title>Portfolio</Title>
                {/* {edges.map(edge => {
                    const { id, slug, title } = edge.node;
                    return (
                        <div key={id}>
                            <Link to={`./${slug}`}>{title}</Link>
                            <br />
                        </div>
                    );
                })} */}
            </div>
        </Layout>
    );
};

export default React.memo(Portfolio);

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
