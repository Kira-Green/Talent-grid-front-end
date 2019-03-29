import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import css from "./Authed.module.css";
import logo from "../Dashboard/logo.png";
import santander from "../Dashboard/santander.png";
import cssEmployee from "../EmployeeInfo/EmployeeInfo.module.css";

// const API_ROUTE_PRIVATE = config.routes.private;
// const API_ROUTE_LOGIN = config.routes.login;

class Authed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  onChange = event => {
    const { value, name } = event.target;
    this.setState(state => ({
      [name]: value
    }));
  };

  logout = () => {
    localStorage.removeItem("my_token");
    this.setState(() => ({
      isLoggedIn: false
    }));
  };

  login = event => {
    event.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(({ success, token }) => {
        if (success && token) {
          this.props.onLoginSuccess(token);
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className={css.Authed}>
        <div className={css.menu} />
        <div className={css.whitemenu}>
          <img id={css.santander} src={santander} />
          <img src={logo} />
        </div>
        <div className={cssEmployee.masterContainer}>
          <div className={css.topMessage}>
            <h1>Welcome to Talent Grid</h1>
            <h2>Please login</h2>
          </div>
          <div>
            <form className={cssEmployee.container} onSubmit={this.login}>
              <TextField
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                type="email"
                // fullWidth="true"
                placeholder="email"
              />
              <Input
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                // fullWidth="true"
                type="password"
                placeholder="password"
              />
              <Button
                className={cssEmployee.btn}
                color="secondary"
                type="submit"
              >
                log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Authed;
