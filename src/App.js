import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./components/LoginSignup/Login";
import Register from "./components/LoginSignup/Register";
import Notification from "./components/Notification";
class App extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <>
        <Notification />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Auth: state.user.Authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
