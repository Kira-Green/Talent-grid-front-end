import React, { Component } from "react";
import css from "./Cell.module.css";
import Employee from "../Employee";

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  onDragOver = event => {
    event.preventDefault();
  };

  onDrop = event => {
    // console.log("event", event);
    let staffNumber = event.dataTransfer.getData("staffNumber");
    // console.log("staff number: ", staffNumber);
    const index = this.props.employees.findIndex(
      item => item.staffNumber === staffNumber
    );
    // console.log("index:", index);
    const newPosition = this.props.gridPosition;
    this.props.handleDrop(index, newPosition);
    // console.log("dropped employee", staffNumber);
  };

  render() {
    return (
      <>
        <div
          className={css.cell}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        >
          <ul className={css.cell}>
            {this.props.employees
              .filter(employee => employee.position === this.props.gridPosition)
              .map((item, idx) => (
                <Employee
                  key={idx}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  staffNumber={item.staffNumber}
                />
              ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Cell;
