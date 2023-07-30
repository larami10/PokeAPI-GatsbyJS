const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `PokeAPI-GatsbyJS`,
    siteUrl: `https://pokeapigatsbyjs.gatsbyjs.io/`,
    description: `Pokemon web database using PokeAPI and GatsbyJS`,
  },
  plugins: [
    `gatsby-plugin-charts-css`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://pokeapigatsbyjs.gatsbyjs.io/",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 100000,
      },
    },
  ],
  flags: {
    DEV_SSR: true,
    PARALLEL_SOURCING: true,
  },
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};
