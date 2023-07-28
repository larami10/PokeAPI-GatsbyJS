import { Link } from "gatsby";
import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../styles/StartersCarousel.scss";
import PokemonCard from "./PokemonCard";
import PokemonTypeIcon from "./PokemonTypeIcon";

/**
 * StartersCarousel will create the carousels for 3 provided
 * starter Pokemon and provided region.
 */
const StartersCarousel = ({ regionalStarters, region }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="carousel-container">
      <h3 className="carousel-region">{region}</h3>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        data-bs-theme="dark"
        interval={null}
        className="carousel"
      >
        {regionalStarters.map((pokemon, index) => (
          <Carousel.Item key={pokemon.name}>
            <div className="carousel-image">
              <Link to={`/${region}/${pokemon.name}`}>
                <PokemonCard
                  pokemonImage={pokemon.image}
                  pokemonTypes={pokemon.types}
                />
              </Link>
            </div>
            <Carousel.Caption>
              <h3>{pokemon.name}</h3>
              <p className="pokemon-type-container">
                <PokemonTypeIcon type={pokemon.types[0]} />{" "}
                {pokemon.types[1] ? (
                  <PokemonTypeIcon type={pokemon.types[1]} />
                ) : null}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default StartersCarousel;
