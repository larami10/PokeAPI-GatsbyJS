import * as React from "react";
import { Card } from "react-bootstrap";
import { types } from "../constants/TypeColors";
import "../styles/PokemonCard.scss";
import PokemonTypeIcon from "./PokemonTypeIcon";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/**
 * PokemonCard is a reusable custom component that will
 * return a Card with the pokemonImage, nationalDexNumber,
 * pokemonName, and pokemonTypes. Some props are optional
 * an may only return the pokemonImage with custom styling.
 * When the image is hovered on, the Pokemon will enlarge
 * and give a dynamic glow depending on the Pokemon's first
 * typing.
 */
const PokemonCard = ({
  nationalDexNumber,
  pokemonName,
  pokemonTypes,
  pokemonLocal,
}) => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Card
      className="pokemon-card"
      style={{
        borderRadius: nationalDexNumber ? "0.375rem" : "20px",
        marginBottom: nationalDexNumber ? "2em" : "0",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="img" style={{ margin: nationalDexNumber ? "1em" : "0" }}>
        <GatsbyImage
          image={getImage(pokemonLocal)}
          alt={pokemonName}
          className="pokemon-card-image"
          style={{
            filter: isHover
              ? `drop-shadow(0 0 1em ${types[pokemonTypes[0]]})`
              : "none",
          }}
        />
      </div>

      {nationalDexNumber ? (
        <>
          <p className="pokemon-card-nationalDexNumber">{nationalDexNumber}</p>
          <Card.Body>
            <Card.Title className="pokemon-card-name">{pokemonName}</Card.Title>
            <Card.Text className="pokemon-card-types">
              <PokemonTypeIcon type={pokemonTypes[0]} />{" "}
              {pokemonTypes[1] ? (
                <span>
                  <PokemonTypeIcon type={pokemonTypes[1]} />
                </span>
              ) : null}
            </Card.Text>
          </Card.Body>
        </>
      ) : null}
    </Card>
  );
};

export default PokemonCard;
