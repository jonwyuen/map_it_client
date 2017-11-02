import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import Home from "./Home";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LogInForm} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
