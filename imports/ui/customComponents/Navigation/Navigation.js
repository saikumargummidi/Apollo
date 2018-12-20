import React from "react";
import windowSize from "react-window-size";
import { Navbar, NavbarToggler, NavbarBrand, Collapse } from "reactstrap";

import PublicNavigation from "./PublicNavigation/PublicNavigation";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <PublicNavigation />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default windowSize(Navigation);
