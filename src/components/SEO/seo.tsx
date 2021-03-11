import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
    author?: string;
    title: string;
    description?: string;
    lang?: string;
    meta?: Array<{ name: string; content: string }>;
    previewImg: string;
    seoImg: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
    author,
    title,
    description,
    lang,
    previewImg,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        previewImg
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

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
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: site.siteMetadata.title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: previewImg || site.siteMetadata.previewImg,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author || site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: site.siteMetadata.title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: previewImg || site.siteMetadata.previewImg,
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
