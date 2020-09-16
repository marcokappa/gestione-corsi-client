import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import scuola_alpinismo48 from "../img/scuola_alpinismo48.png";

const NavBar = (props) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img src={scuola_alpinismo48} alt="logo sito" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <Nav.Link href="/corsi">Corsi</Nav.Link>
          <Nav.Link href="/calendario">Calendario</Nav.Link>
          <Nav.Link href="/bilancio">Bilancio</Nav.Link>
        </Nav>

        <Button variant="dark">Esci</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
