import * as React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../styles/NavBar.scss";
import PokeballIcon from "./PokeballIcon";

/**
 * NavBar will be used as part of the Layout for all pages. NavBar
 * contains the Pokeball Icon (Home Page), National Pokedex link,
 * and a Pokemon Origins dropdown for all Regional Pokedex links.
 */
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand className="navbar-brand-container" href="/">
          <PokeballIcon />
          Pokemon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/national">National Pokedex</Nav.Link>
            <NavDropdown title="Pokemon Origins" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/kanto">Kanto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/johto">Johto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hoenn">Hoenn</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sinnoh">Sinnoh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/unova">Unova</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/kalos">Kalos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/alola">Alola</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/galar">Galar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hisui">Hisui</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/paldea">Paldea</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
