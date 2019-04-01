import React from "react";
import { CssBaseline } from "@material-ui/core";
import css from "./EmployeeInfo.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { api } from "../../config";

let searchValue = "";
class EmployeeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      employeeNumber: "",
      position: ""
    };
  }

  handleFirstName = event => {
    searchValue = event.target.value;
    this.setState(() => ({ firstName: searchValue }));
    console.log(this.state.firstName);
  };

  handleLastName = event => {
    searchValue = event.target.value;
    this.setState(() => ({ lastName: searchValue }));
  };

  handleEmployeeNumber = event => {
    searchValue = event.target.value;
    this.setState(() => ({ employeeNumber: searchValue }));
  };

  handleSubmit = () => {
    fetch(api.employees, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // <-- Specifying the Content-Type
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        staffNumber: this.state.employeeNumber,
        position: ""
      })
    })
      .then(response => response.json())
      .then(response => {
        alert(response.message);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className={css.masterContainer}>
        <h1>Add Employee </h1>
        <div className={css.container}>
          <TextField
            placeholder="First Name"
            onChange={event => this.handleFirstName(event)}
          />
          <TextField
            placeholder="Surname"
            onChange={event => this.handleLastName(event)}
          />
          <TextField
            placeholder="Employee Number"
            onChange={event => this.handleEmployeeNumber(event)}
          />
          <br />
          <Button color="secondary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default EmployeeInfo;
