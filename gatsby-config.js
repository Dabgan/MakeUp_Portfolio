require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                data: `@import "./src/assets/styles/variables";`,
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
            },
        },
    ],
}
