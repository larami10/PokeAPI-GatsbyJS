import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/CarouselHome.scss";
import StartersCarousel from "./StartersCarousel";

/**
 * CarouselHome creates a row and displays the
 * starter Pokemon using the StartersCarousel component.
 */
const CarouselHome = () => {
  // PokeAPI query to get starter pokemon
  const data = useStaticQuery(graphql`
    query {
      allPokemon(
        filter: {
          name: {
            in: [
              "bulbasaur"
              "charmander"
              "squirtle"
              "chikorita"
              "cyndaquil"
              "totodile"
              "treecko"
              "torchic"
              "mudkip"
              "turtwig"
              "chimchar"
              "piplup"
              "snivy"
              "tepig"
              "oshawott"
              "chespin"
              "fennekin"
              "froakie"
              "rowlet"
              "litten"
              "popplio"
              "grookey"
              "scorbunny"
              "sobble"
              "rowlet"
              "cyndaquil"
              "oshawott"
              "sprigatito"
              "fuecoco"
              "quaxly"
            ]
          }
        }
      ) {
        nodes {
          name
          types
          localImage {
            childImageSharp {
              gatsbyImageData(
                webpOptions: { quality: 100 }
                quality: 100
                formats: WEBP
                layout: CONSTRAINED
                height: 150
                width: 150
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  const allPokemonData = data.allPokemon.nodes;

  return (
    <Container className="carousel-grid">
      <h2>Pokemon Starters</h2>
      <Row xs={1} md={3} className="carousel-row">
        <StartersCarousel
          regionalStarters={allPokemonData.slice(0, 3)}
          region="kanto"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(3, 6)}
          region="johto"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(6, 9)}
          region="hoenn"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(9, 12)}
          region="sinnoh"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(12, 15)}
          region="unova"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(15, 18)}
          region="kalos"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(18, 21)}
          region="alola"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(21, 24)}
          region="galar"
        />
        <StartersCarousel
          regionalStarters={allPokemonData.slice(24, 27)}
          region="paldea"
        />
      </Row>
    </Container>
  );
};

export default CarouselHome;
