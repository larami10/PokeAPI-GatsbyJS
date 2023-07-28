import React from "react";
import { Container } from "react-bootstrap";
import PokeballIcon from "./PokeballIcon";
import "../styles/Footer.scss";
import { Link } from "gatsby";

/**
 * Footer is a basic footer component that currently only shows
 * the PokeballIcon component to go back to the home page.
 */
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container fluid className="footer-content">
        <Link to="/">
          <PokeballIcon /> Pokemon
        </Link>
      </Container>
    </Container>
  );
};

export default Footer;
