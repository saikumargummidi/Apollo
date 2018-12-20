import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import RenderPage from  '../../Components/RenderPage/RenderPage';
import Strip from '../../Components/Strip/Strip';
import { Accounts } from "meteor/accounts-base";

class SignUp extends Component {
  constructor(props){
     super(props)
     this.RegisterUser = this.RegisterUser.bind(this);
  } 
  RegisterUser(e){
   e.preventDefault();
   debugger;
     console.log("firstName lastname", this.firstName.value, this.lastName.value);
     console.log("user", this.emailAddress.value);
     console.log('password', this.password.value);
   Accounts.createUser(
      {
         firstName: this.firstName.value,
         lastName: this.lastName.value,
         email: this.emailAddress.value,
         password: this.password.value,
      }, error=>{
         console.log(error);
      }
   )
  }
  render() {
    return (
      <RenderPage className="renderPage" containerType="container">
        <Strip className="strip" containerType="container">
          <h3>Login</h3>
          <Row>
            <Col xl={6}>
              <form ref={form => (this.form =form)} onSubmit={this.RegisterUser}>
                <Row>
                  <Col xl={6}>
                    <FormGroup>
                      <Label for="firstName">FirstName</Label>
                      <input
                        type="text"
                        name="firstName"
                        ref={firstName => (this.firstName= firstName)}
                        placeholder="firstName"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col xl={6}>
                    <FormGroup>
                      <Label for="lastName">LastName</Label>
                      <input
                        type="text"
                        name="lastName"
                        ref={lastName => (this.lastName= lastName)}
                        placeholder="lastName"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="emailAddress">Email</Label>
                  <input
                    type="email"
                    name="emailAddress"
                    ref={emailAddress => (this.emailAddress = emailAddress)}
                    placeholder="emailAddress"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <input
                    type="password"
                    name="password"
                    ref={password => (this.password = password)}
                    placeholder="password"
                    className="form-control"
                  />
                </FormGroup>
                <Button type="submit">Signup</Button>
              </form>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default SignUp;
