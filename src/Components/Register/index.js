import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <div>
          <label>First Name: </label>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <label>Username: </label>
          <input type="text" placeholder="Username" />
        </div>

        <div>
          <label>Password: </label>
          <input type="text" placeholder="Password" />
        </div>

        <button type="button">Register</button>
      </div>
    );
  }
}

export default Register;
