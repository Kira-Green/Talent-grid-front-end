import React, { Component } from "react";
import css from "./App.module.css";
import Grid from "../Grid";
import TalentBank from "../TalentBank";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {
                    name: "Kira Green",
                    staffNumber: "E123456",
                    position: 0
                },
                {
                    name: "Manu Magalhaes",
                    staffNumber: "E654321",
                    position: 0
                },
                {
                    name: "Bukola Surname",
                    staffNumber: "E135790",
                    position: 0
                },
                {
                    name: "Kira Green",
                    staffNumber: "E123456",
                    position: 0
                },
                {
                    name: "Manu Magalhaes",
                    staffNumber: "E654321",
                    position: 0
                },
                {
                    name: "Bukola Surname",
                    staffNumber: "E135790",
                    position: 0
                },
                {
                    name: "Kira Green",
                    staffNumber: "E123456",
                    position: 0
                },
                {
                    name: "Manu Magalhaes",
                    staffNumber: "E654321",
                    position: 0
                },
                {
                    name: "Bukola Surname",
                    staffNumber: "E135790",
                    position: 0
                },
                {
                    name: "Kira Green",
                    staffNumber: "E123456",
                    position: 0
                }
            ]
        };
    }

    onDragOver = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className={css.BankAndEmployeeContainer}>
                <TalentBank
                    employees={this.state.employees}
                    onDragOver={event => this.onDragOver(event)}
                    onDrop={event => this.onDropTalentBank(event)}
                />
                <Grid employee={this.state.employees} />
            </div>
        );
    }
}

export default App;
