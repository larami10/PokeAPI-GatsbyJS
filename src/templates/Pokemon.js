import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BaseStatChart from "../components/BaseStatChart";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import PokemonTypeIcon from "../components/PokemonTypeIcon";
import "../styles/Pokemon.scss";

/**
 * This is a template page that is used by gatsby-node.js to
 * create all 1010 individual Pokemon pages displaying the Pokemon image,
 * the Pokemon's type, and Pokemon's base stats.
 */
const Pokemon = (props) => {
  const { pageContext } = props;

  return (
    <Layout>
      <Container className="pokemon-container">
        <Row xs={1} md={2} className="pokemon-container-row">
          <Col className="pokemon-image-column-container">
            <h3>{pageContext.pokemon.name}</h3>
            <Row className="pokemon-image">
              <PokemonCard
                pokemonImage={pageContext.pokemon.image}
                pokemonName={pageContext.pokemon.name}
                pokemonTypes={pageContext.pokemon.types}
              />
            </Row>
            <Row className="pokemon-types">
              <h6>
                Pokemon Type:{" "}
                <PokemonTypeIcon type={pageContext.pokemon.types[0]} />{" "}
                {pageContext.pokemon.types[1] ? (
                  <PokemonTypeIcon type={pageContext.pokemon.types[1]} />
                ) : null}
              </h6>
            </Row>
          </Col>
          <Col className="pokemon-description-column-container">
            <Row className="base-stat-chart">
              <BaseStatChart stats={pageContext.pokemon.stats} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Pokemon;

export const Head = (props) => {
  const head = props.pageContext.pokemon.name;
  return (
    <title className="head-title">
      {head.charAt(0).toUpperCase() + head.slice(1)}
    </title>
  );
};
