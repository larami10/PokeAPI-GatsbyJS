import { Link } from "gatsby";
import * as React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Grid.scss";
import PokemonCard from "./PokemonCard";

/**
 * Grid will be used to display all Pokemon in a grid
 * which is used in all Pokedex pages.
 */
const Grid = ({ pokemonData }) => {
  // Add 0's to the Pokemon's national dex number
  const generatePokemonIndex = (nationalNumber) => {
    return nationalNumber < 10
      ? `#000${nationalNumber}`
      : nationalNumber < 100
      ? `#00${nationalNumber}`
      : nationalNumber < 1000
      ? `#0${nationalNumber}`
      : `#${nationalNumber}`;
  };

  return (
    <Container className="grid">
      <Row xs={1} sm={2} md={3} lg={4}>
        {pokemonData.map((node, index) => (
          <Link key={index} to={`/${node.region}/${node.name}`}>
            <PokemonCard
              nationalDexNumber={generatePokemonIndex(node.nationalDexNumber)}
              pokemonImage={node.image}
              pokemonName={node.name}
              pokemonTypes={node.types}
            />
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
