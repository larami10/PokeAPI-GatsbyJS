import React from "react";
import { Container } from "react-bootstrap";
import PokeballIcon from "./PokeballIcon";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <div className="footer-content">
        <PokeballIcon /> Pokemon
      </div>
    </Container>
  );
};

export default Footer;
