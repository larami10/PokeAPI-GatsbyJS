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
    `gatsby-plugin-sass`,
    `gatsby-plugin-charts-css`,
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "POKEMON",
        imagePath: "image",
        silent: true,
        skipUndefinedUrls: true,
        prepareUrl: (url) => {
          if (!url || url === "N/A") return undefined;
          return url;
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
