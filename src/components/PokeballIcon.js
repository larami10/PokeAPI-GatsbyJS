import React from "react";
import "../styles/PokeballIcon.scss";

/**
 * PokeballIcon creates a Pokeball using css that blinks
 * at page start.
 */
const PokeballIcon = () => {
  return (
    <div className="pokeball">
      <div className="pokeball__button"></div>
    </div>
  );
};

export default PokeballIcon;
