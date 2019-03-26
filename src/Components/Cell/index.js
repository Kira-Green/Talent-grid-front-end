import React, { Component } from "react";
import css from "./Cell.module.css";
import Employee from "../Employee";

class Cell extends Component {
    onDragOver = event => {
        event.preventDefault();
    };

    onDrop = event => {
        console.log("event", event);
        let employee = event.dataTransfer.getData("id");
        console.log(employee);
        // this.setState(state => ({
        //     employees: [...state.employees, employee]
        // }));
    };

    render() {
        return (
            <>
                <div
                    className={css.element}
                    draggable
                    onDragOver={event => this.onDragOver(event)}
                    onDrop={this.onDrop}
                >
                    {this.props.employees ? (
                        <ul>
                            {this.props.employees.map((item, idx) => (
                                <Employee
                                    key={idx}
                                    name={item.name}
                                    staffNumber={item.staffNumber}
                                />
                            ))}
                        </ul>
                    ) : (
                        ""
                    )}
                    Test
                </div>
            </>
        );
    }
}

export default Cell;
