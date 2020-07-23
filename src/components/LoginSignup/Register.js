import React, { Component } from "react";
import { Row, Col, Form, Container, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import "./register.css";
import IconDisplay from "./IconFormat";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPassword = RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "country",
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      country: "",
      formError: "",
      emailError: "",
      passError: "",
      cnfPassError: "",
      countryError: "",
      firstNameError: "",
      lastnameError: "",
      emailtakenerror: "",
      registerData: "",
      openTransferBalModal: false,
    };
  }

  errorMap = {
    password_or_email_invalid: "User Registration fail.",
  };

  render() {
    return (
      <div>
        <div>
          <div className="wrapper">
            <div className="frm-wrapper register">
              <section className="frm-block">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="frm-outer">
                        <ul className="frm-tabs">
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register" className="active">
                              Register
                            </Link>
                          </li>
                        </ul>
                        <Form className=" frm-body signin-wd shadow  bg-light rounded">
                          <form onSubmit={this.registerForm}>
                            <div className="login-signup-heading">
                              Create Bitfex Account
                            </div>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <InputGroup>
                                <IconDisplay icon="fa fa-envelope" />
                                <Form.Control
                                  type="email"
                                  placeholder="Enter email"
                                  isInvalid={false}
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
                              <Form.Label>Confirm Password</Form.Label>
                              <InputGroup>
                                <IconDisplay icon="fa fa-key" />
                                <Form.Control
                                  type="password"
                                  placeholder="Confirm Password"
                                  isInvalid={""}
                                  name="password2"
                                  value={this.state.password2}
                                  onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Choose Country</Form.Label>
                              <InputGroup>
                                <IconDisplay icon="fa fa-globe" />
                                <Form.Control
                                  as="select"
                                  name="type"
                                  value={this.state.type}
                                  onChange={this.handleChange}
                                >
                                  <option value="India">India</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Pakistan">Pakistan</option>
                                </Form.Control>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                              <Form.Label>First Name</Form.Label>
                              <InputGroup>
                                <IconDisplay icon="fa fa-user" />
                                <Form.Control
                                  type="text"
                                  placeholder="First Name"
                                  isInvalid={""}
                                  name="name"
                                  value={this.state.name}
                                  onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                              <Form.Label>Last Name</Form.Label>
                              <InputGroup>
                                <IconDisplay icon="fa fa-user" />
                                <Form.Control
                                  type="text"
                                  placeholder="Last Name"
                                  isInvalid={""}
                                  name="name"
                                  value={this.state.name}
                                  onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group>
                              <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={""}
                                isInvalid={""}
                                id="validationFormik0"
                              />
                            </Form.Group>

                            <div className="text-center">
                              <button className="form-button create-account">
                                Create My Account
                              </button>
                            </div>
                          </form>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
