import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import css from "./Authed.module.css";

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
        <div className={css.topMessage}>
          <h1>You are not allowed to be here</h1>
        </div>

        <form onSubmit={this.login}>
          <TextField
            onChange={this.onChange}
            value={this.state.email}
            name="email"
            type="email"
            placeholder="email"
          />
          <Input
            onChange={this.onChange}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="password"
          />
          <Button color="primary" type="submit">
            log in
          </Button>
        </form>
      </div>
    );
  }
}

export default Authed;
