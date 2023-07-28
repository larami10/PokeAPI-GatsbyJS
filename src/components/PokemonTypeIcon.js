import React from "react";
import { Button } from "react-bootstrap";
import { types } from "../constants/TypeColors";
import "../styles/PokemonTypeIcon.scss";

const PokemonTypeIcon = ({ type }) => {
  return (
    <>
      <Button
        className="pokemon-type-icon"
        size="sm"
        style={{ background: types[type] }}
      >
        {type}
      </Button>
    </>
  );
};

export default PokemonTypeIcon;
