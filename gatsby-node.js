/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

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
