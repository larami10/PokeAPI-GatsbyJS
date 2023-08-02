const path = require("path");

// regions will be used to create regional pokedex pages
const regions = [
  {
    id: 0,
    path: "national",
  },
  {
    id: 1,
    path: "kanto",
  },
  {
    id: 2,
    path: "johto",
  },
  {
    id: 3,
    path: "hoenn",
  },
  {
    id: 4,
    path: "sinnoh",
  },
  {
    id: 5,
    path: "unova",
  },
  {
    id: 6,
    path: "kalos",
  },
  {
    id: 7,
    path: "alola",
  },
  {
    id: 8,
    path: "galar",
  },
  {
    id: 9,
    path: "hisui",
  },
  {
    id: 10,
    path: "paldea",
  },
];

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // query PokeAPI to get allPokemon data
  const query = await graphql(`
    query {
      allPokemon {
        nodes {
          name
        }
      }
    }
  `);

  // set data to nodes
  const data = query.data.allPokemon.nodes;

  // add an id and region to all Pokemon as it's not provided by PokeAPI
  const pokemon = data.map((pokemon, index) => ({
    ...pokemon,
    id: index,
    region:
      index < 151
        ? "kanto"
        : index <= 250
        ? "johto"
        : index <= 385
        ? "hoenn"
        : index <= 492
        ? "sinnoh"
        : index <= 648
        ? "unova"
        : index <= 720
        ? "kalos"
        : index <= 808
        ? "alola"
        : index <= 897
        ? "galar"
        : index <= 904
        ? "hisui"
        : index <= 1010
        ? "paldea"
        : "national",
  }));

  // Create all 11 Pokedex pages
  regions.forEach((regions) => {
    createPage({
      path: `/${regions.path}`,
      component: path.resolve(`src/templates/Pokedex.js`),
      context: { id: regions.id, title: regions.path },
    });
  });

  // Create all 1010 Pokemon pages
  pokemon.forEach((pokemon) => {
    createPage({
      path: `/${pokemon.region}/${pokemon.name}`,
      component: path.resolve(`src/templates/Pokemon.js`),
      context: { id: pokemon.id, name: pokemon.name },
    });
  });
};
