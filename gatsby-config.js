require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `Kinga Dąbrowska Make Up Artist`,
        description: `Superior Make Up and FX. Make up artist based in Warsaw`,
        author: `Gabriel Daniluk - github.com/Dabgan`,
        siteURL: `https://kingadabrowska.netlify.app`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Josefin Sans:200,400,500`],
                display: 'swap',
            },
        },

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
                data: ` @import "./src/assets/styles/variables";
                        @import "./src/assets/styles/mixins";
                `,
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kinga Dąbrowska Make Up Artist`,
                short_name: `Kinga Dąbrowska`,
                icon: `src/assets/images/favicon.png`,
            },
        },
    ],
};
