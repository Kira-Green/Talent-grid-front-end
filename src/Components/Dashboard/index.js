import React from "react";
import App from "../App";
import Home from "../Home";
import EmployeeInfo from "../EmployeeInfo";
import css from "./Dashboard.module.css";
import logo from "./logo.png";
import santander from "./santander.png";
import Button from "@material-ui/core/Button";

//const { NavLink, Route } = ReactRouterDOM;

import { Route, NavLink } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <div className={css.menu}>
          <div className={css.linksContainer}>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/employeeInfo">
              Employee
            </NavLink>
            <NavLink exact to="/createNewGrid">
              Talent Grid
            </NavLink>
            <div className={css.logout}>
              <Button onClick={this.props.logout}>Log out</Button>
            </div>
          </div>
        </div>
        <div className={css.whitemenu}>
          <img id={css.santander} src={santander} />
          <img src={logo} />
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/employeeInfo" component={EmployeeInfo} />
          <Route exact path="/createNewGrid" component={App} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
