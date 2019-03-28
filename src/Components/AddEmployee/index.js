import React from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button variant="extendedFab">Add Employee</Button>;
  }
}

export default AddEmployee;
