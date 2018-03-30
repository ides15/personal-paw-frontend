import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../assets/css/Login.css";
import request from "superagent";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      loggedIn: false,
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  validateForm() {
    return this.state.login.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    try {
      this.setState({ isLoading: true });
      setTimeout(() => {
      }, request.post('https://personal-paw-penn-state.appspot.com/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ login: this.state.login, password: this.state.password })
      .end((err, res) => {
        this.setState({ isLoading: false });
        console.log(res);
      }));

    } catch (err) {
      console.log(err);
    }
  }

  request() {
    return
  }



  render() {
    const { isLoading } = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="login" bsSize="large">
            <ControlLabel>Login</ControlLabel>
            <FormControl
              autoFocus
              type="login"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsId="loginButton"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={!isLoading ? this.handleClick : null}
          >
            {isLoading ? <div><i class="fa fa-circle-o-notch fa-spin"></i>Authenticating...<br></br><i>This may take a minute</i></div> : 'Login'}
          </Button>
        </form>
      </div>
    );
  }
}