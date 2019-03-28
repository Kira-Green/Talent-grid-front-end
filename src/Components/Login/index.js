import React, { Component } from "react";
import css from "./Login.module.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div className={css.loginbox}>
          <label>Username: </label>
          <input type="text" placeholder="Username" />
        </div>

        <div>
          <label>Password: </label>
          <input type="text" placeholder="Password" />
        </div>

        <button type="button">Login</button>
      </div>
    );
  }
}

export default Login;
