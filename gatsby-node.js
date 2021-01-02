/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

// getting rid of -react-dom-hot-loader- console error
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig();
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
        };
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const articleTemplate = path.resolve('./src/templates/ArticleTemplate.tsx');
    const result = await graphql(`
        query {
            slugs: allDatoCmsArticle {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    result.data.slugs.edges.forEach(({ node }) => {
        const { slug } = node;

        createPage({
            path: slug,
            component: articleTemplate,
            context: {
                slug,
            },
        });
    });
};
