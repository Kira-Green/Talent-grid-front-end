import React from "react";
import Dashboard from "../Dashboard";

import { BrowserRouter } from "react-router-dom";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  }
}

export default Router;
