import React from "react";
import css from "./Employee.module.css";

class Employee extends React.Component {
    onDragStart = event => {
        event.dataTransfer.setData("id", this.props.name);
        console.log(this.props);
    };

    render() {
        return (
            <li
                className={css.employee}
                draggable="true"
                onDragStart={event => this.onDragStart(event)}
            >
                {this.props.name}
            </li>
        );
    }
}

export default Employee;
