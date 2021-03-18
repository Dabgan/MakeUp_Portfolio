import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
    author?: string;
    title: string;
    description?: string;
    lang?: string;
    meta?: Array<{ name: string; content: string }>;
    previewImg?: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
    author,
    title,
    description,
    lang,
    previewImg,
}) => {
    const { site, seoImg } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
                seoImg: file(relativePath: { eq: "SEOImg.png" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    );

    const seo = {
        metaDescription: description || site.siteMetadata.description,
        metaImg: previewImg || seoImg.childImageSharp.fluid.src,
        metaAuthor: author || site.siteMetadata.author,
        metaTitle: site.siteMetadata.title,
    };

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    property: `robots`,
                    content: `index, follow`,
                },
                {
                    name: `description`,
                    content: seo.metaDescription,
                },
                {
                    property: `og:title`,
                    content: seo.metaTitle,
                },
                {
                    property: `og:description`,
                    content: seo.metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: seo.metaImg,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: seo.metaAuthor,
                },
                {
                    name: `twitter:title`,
                    content: seo.metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: seo.metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: seo.metaImg,
                },
            ]}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    title: ``,
    author: ``,
    previewImg: ``,
};

export default React.memo(SEO);
