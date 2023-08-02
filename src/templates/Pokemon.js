import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BaseStatChart from "../components/BaseStatChart";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import PokemonTypeIcon from "../components/PokemonTypeIcon";
import "../styles/Pokemon.scss";
import { Seo } from "../components/Seo";
import { PokeAPIQuery } from "../constants/PokeAPIQuery";

/**
 * This is a template page that is used by gatsby-node.js to
 * create all 1010 individual Pokemon pages displaying the Pokemon image,
 * the Pokemon's type, and Pokemon's base stats.
 */
const Pokemon = (props) => {
  const { pageContext } = props;

  const pokemon = PokeAPIQuery();

  return (
    <Layout>
      <Container className="pokemon-container">
        <Row xs={1} md={2} className="pokemon-container-row">
          <Col className="pokemon-image-column-container">
            <h3>{pokemon[pageContext.id].name}</h3>
            <Row className="pokemon-image">
              <PokemonCard
                pokemonName={pokemon[pageContext.id].name}
                pokemonTypes={pokemon[pageContext.id].types}
                pokemonLocal={pokemon[pageContext.id].localImage}
              />
            </Row>
            <Row className="pokemon-types">
              <h6>
                Pokemon Type:{" "}
                <div>
                  <PokemonTypeIcon type={pokemon[pageContext.id].types[0]} />{" "}
                  {pokemon[pageContext.id].types[1] ? (
                    <PokemonTypeIcon type={pokemon[pageContext.id].types[1]} />
                  ) : null}
                </div>
              </h6>
            </Row>
          </Col>
          <Col className="pokemon-description-column-container">
            <Row className="base-stat-chart">
              <BaseStatChart stats={pokemon[pageContext.id].stats} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Pokemon;

export const Head = (props) => {
  let head = props.pageContext.name;
  head = head.charAt(0).toUpperCase() + head.slice(1);

  return <Seo title={head} description={head} />;
};
