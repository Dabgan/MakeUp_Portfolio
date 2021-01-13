import { graphql } from 'gatsby';
import Image, { GatsbyImageFixedProps } from 'gatsby-image';
import React from 'react';

interface ArticleProps {
    data: {
        article: {
            slug: string;
            title: string;
            description: string;
            image: GatsbyImageFixedProps;
        };
    };
}

const ArticleTemplate: React.FC<ArticleProps> = ({ data }) => {
    const { title, description, image } = data.article;

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Image fixed={image.fixed}></Image>
        </div>
    );
};

export const query = graphql`
    query($slug: String!) {
        article: datoCmsArticle(slug: { eq: $slug }) {
            slug
            title
            description
            image {
                fixed {
                    ...GatsbyDatoCmsFixed_tracedSVG
                }
            }
        }
    }
`;

export default React.memo(ArticleTemplate);
