import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar className="header">
      <Container>
        <Nav>
          <NavItem>
            <Link className="header-button" to="/add">
              +
            </Link>
          </NavItem>
        </Nav>
        <NavbarBrand className="heading-text">SUBMIT A LINK</NavbarBrand>
      </Container>
    </Navbar>
  );
};
