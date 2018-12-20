import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navigation from "../../customComponents/Navigation/Navigation";
import Styled from "styled-components";
import { compose } from "redux";

import Home from "../../customPage/Home/Home";
import AboutUs from "../../customPage/AboutUs/AboutUs";
import Team from "../../customPage/Team/Team";
import SignUp from "../../customComponents/Authentication/SignUp/SignUp";
import Login from "../../customComponents/Authentication/Login/Login";
const StyledApp = Styled.div`
> p{
    margin-bottom: 0;
}

`;
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }
  componentDidMount() {
    this.setPageReady();
  }
  setPageReady() {
    this.setState({ ready: true });
  }
  render() {
    const { props, state } = this;
    return (
      <StyledApp ready={this.state.ready} className="App">
        <Navigation {...props} {...state} />
        <Switch>
          <Route exact name="home" path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} {...props} />
          <Route path="/team" component={Team} {...props} />
          <Route path="/signup" component={SignUp} {...props} />
          <Route path="/login" component={Login} {...props} />
        </Switch>
      </StyledApp>
    );
  }
}

export default compose(App);
