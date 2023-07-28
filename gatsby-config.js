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
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 100000,
      },
    },
  ],
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
