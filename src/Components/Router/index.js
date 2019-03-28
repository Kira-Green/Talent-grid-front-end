import React from "react";
import Dashboard from "../Dashboard";
import Authed from "../Authed";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem("my_token"))
    };
  }

  onLoginSuccess = token => {
    localStorage.setItem("my_token", token);
    this.setState(() => ({
      isLoggedIn: true
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/login"
            render={routerProps => (
              <Authed {...routerProps} onLoginSuccess={this.onLoginSuccess} />
            )}
          />
          <Route
            path="/"
            render={() => {
              if (!this.state.isLoggedIn) {
                return <Redirect to="/login" />;
              }
              return <Dashboard />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
