/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-charts-css`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 100000,
      },
    },
  ],
};
