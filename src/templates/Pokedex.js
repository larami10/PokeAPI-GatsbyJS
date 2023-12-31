import * as React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import { regionalPokedexData } from "../constants/RegionalPokedexData";
import { regions } from "../constants/Regions";
import { Seo } from "../components/Seo";
import { PokeAPIQuery } from "../constants/PokeAPIQuery";

/**
 * Pokedex is a template component that is used by gatsby-node.js to create
 * all 11 Pokedex pages. (i.e: 10 regional and 1 national Pokedex)
 */
const Pokedex = (props) => {
  const { pageContext } = props;
  const region = pageContext?.id ?? 0;

  // query to get allPokemon data from PokeAPI
  const query = PokeAPIQuery();

  const nationalPokedexData = query.map((pokemon, index) => ({
    ...pokemon,
    nationalDexNumber: index + 1,
    region: regions(index),
  }));

  const regionalPokedex = regionalPokedexData(region, nationalPokedexData);

  return (
    <Layout>
      <Container fluid>
        <Grid pokemonData={regionalPokedex} />
      </Container>
    </Layout>
  );
};

export default Pokedex;

export const Head = (props) => {
  let head = props.pageContext.title;
  head = head.charAt(0).toUpperCase() + head.slice(1) + " Pokedex";

  return <Seo title={head} description={head} />;
};
