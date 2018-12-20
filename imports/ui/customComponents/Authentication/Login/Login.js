import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import RenderPage from '../../Components/RenderPage/RenderPage';
import Strip from '../../Components/Strip/Strip';
import { Accounts } from "meteor/accounts-base";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
   e.preventDefault();
     console.log("user", this.emailAddress.value);
     console.log('password', this.password.value);
    Meteor.loginWithPassword(this.emailAddress.value, this.password.value,error => {
        console.log(error);
      }
    );
  }
  render() {
    return (
      <RenderPage className="renderPage" containerType="container">
        <Strip className="strip" containerType="container">
          <h3>Login</h3>
          <Row>
            <Col xl={6}>
              <form ref={form => (this.form = form)} onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="emailAddress">Email</Label>
                  <input
                    type="email"
                    name="emailAddress"
                    ref={emailAddress => (this.emailAddress = emailAddress)}
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    ref={password => (this.password = password)}
                  />
                </FormGroup>
                <Button type="submit">
                  Login
                </Button>
              </form>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default Login;
