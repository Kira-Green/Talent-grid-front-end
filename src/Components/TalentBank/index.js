import React from "react";
import Employee from "../Employee";
import css from "./TalentBank.module.css";

class TalentBank extends React.Component {
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
    // this.props.handleDrop(index, newPosition);
    // console.log("dropped employee", staffNumber);
  };

  render() {
    return (
      <ul
        className={css.bank}
        onDrop={this.onDrop}
        onDragOver={event => this.onDragOver(event)}
      >
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
    );
  }
}
export default TalentBank;
