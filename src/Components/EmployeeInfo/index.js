import React from "react";
import { CssBaseline } from "@material-ui/core";
import css from "./EmployeeInfo.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EmployeeInfo extends React.Component {
  render() {
    return (
      <div className={css.masterContainer}>
        <h1>Add Employee</h1>
        <div className={css.container}>
          <TextField placeholder="First Name" />
          <TextField placeholder="Surname" />
          <TextField placeholder="Employee Number" />
          <br />
          <Button color="secondary">Submit</Button>
        </div>
      </div>
    );
  }
}

export default EmployeeInfo;
