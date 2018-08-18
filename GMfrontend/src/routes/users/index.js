import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login";
import { isLoggedIn } from "../../helpers/authentication";
import Dashboard from "../dashboard";
import Devices from "../devices";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path=""
          render={props => {
            if (isLoggedIn()) {
              return <Devices />;
            }
            return <Login />;
          }}
        />
      </Switch>
    );
  }
}

export default App;
