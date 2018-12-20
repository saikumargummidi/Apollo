import React from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem } from "reactstrap";
import windowSize from "react-window-size";

const PublicNavigation = () => (
  <Nav>
    <LinkContainer exact to="/">
      <NavItem className="nav-item--custom">Home</NavItem>
    </LinkContainer>
    <LinkContainer to="/aboutus">
      <NavItem className="nav-item--custom">About</NavItem>
    </LinkContainer>
    <LinkContainer to="/team">
      <NavItem className="nav-item--custom">Team</NavItem>
    </LinkContainer>
    <LinkContainer to="/login">
      <NavItem className="nav-item--custom">Login</NavItem>
    </LinkContainer>
    <LinkContainer to="/signup">
      <NavItem className="nav-item--custom">Sign-up</NavItem>
    </LinkContainer>
  </Nav>
);

export default withRouter(PublicNavigation);
