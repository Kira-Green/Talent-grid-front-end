import React from "react";
import css from "./Employee.module.css";

class Employee extends React.Component {
  onDragStart = event => {
    event.dataTransfer.setData("staffNumber", this.props.staffNumber);
  };

  render() {
    console.log(this.props);
    return (
      <li
        className={css.employee}
        draggable="true"
        onDragStart={event => this.onDragStart(event)}
      >
        {`${this.props.firstName} ${this.props.lastName}`}
      </li>
    );
  }
}

export default Employee;
