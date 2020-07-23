import React, { Component } from "react";
import PropTypes from "prop-types";
import IconDisplay from "./IconFormat";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Form, Container, InputGroup } from "react-bootstrap";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "country",
      email: "",
      password: "",
      token_2fa: "",
      emailRequired: "",
      passwordRequired: "",
      formError: "",
      isDirty: false,
      openTransferBalModal: false,
      emailConfirmation: "",
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="frm-wrapper">
          <section className="frm-block">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="frm-outer">
                    <ul className="frm-tabs">
                      <li>
                        <Link to="/login" className="active">
                          Log In
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </ul>

                    <Form className=" frm-body shadow  bg-light rounded">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup>
                          <IconDisplay icon="fa fa-envelope" />
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            isInvalid={""}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                          <IconDisplay icon="fa fa-key" />
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            isInvalid={""}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Two-Factor Code (if enabled)</Form.Label>
                        <InputGroup>
                          <IconDisplay icon="fa fa-user-secret" />
                          <Form.Control
                            type="text"
                            placeholder="Google Authenticator"
                            isInvalid={""}
                            name="password"
                            value={this.state.password}
                            onChange={this.twoFectorcode}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <div className="form-group row ng-captcha-container"></div>
                      <div className="text-center">
                        <button
                          className="form-button login-btn"
                          type="submit"
                          onClick={this.LoginForm}
                        >
                          Log In
                        </button>
                      </div>
                      <div className="frm-footer">
                        <div className="sign">
                          <Link to="/forgot">
                            {" "}
                            Forgot Password or Two-Factor Device?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;
