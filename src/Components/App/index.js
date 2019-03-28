import React, { Component } from "react";
import css from "./App.module.css";
import Grid from "../Grid";
import TalentBank from "../TalentBank";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import TextField from "@material-ui/core/TextField";

let searchValue = "";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridPosition0: "",
      gridPosition1: "Exceptional Team Talent",
      gridPosition2: "Exceptional Functional Talent",
      gridPosition3: "Exceptional Organisational Talent",
      gridPosition4: "Strong Team Professional",
      gridPosition5: "Strong Functional Talent",
      gridPosition6: "Strong Organisational Talent",
      gridPosition7: "Team Potential",
      gridPosition8: "Functional Potential",
      gridPosition9: "Organisational Potential",

      employees: [],
      search: ""
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:5000/employees")
  //     .then(response => response.json())
  //     //.then(response => console.log(response))
  //     .then(({ payload }) =>
  //       this.setState(() => ({ employees: payload.employee }))
  //     );
  // }

  prepopulate = () => {
    fetch("http://localhost:5000/employees")
      .then(response => response.json())
      //.then(response => console.log(response))
      .then(({ payload }) =>
        this.setState(() => ({ employees: payload.employee }))
      );
  };

  // reset = index => {

  //   this.setState(state => ({
  //     employees: [{ ...state.employees[index], position: "" }]
  //   }));

  // };

  onDragOver = event => {
    event.preventDefault();
  };

  handleDrop = (index, newPosition) => {
    console.log(index);
    console.log(newPosition);

    this.setState(state => ({
      employees: [
        ...state.employees.slice(0, index),
        { ...state.employees[index], position: newPosition },
        ...state.employees.slice(index + 1)
      ]
    }));
  };

  handleSearch = event => {
    searchValue = event.target.value;
    this.setState(() => ({ search: searchValue }));
    console.log(this.state.search);
  };

  findEmployee = () => {
    fetch(`http://localhost:5000/employees/${this.state.search}`)
      .then(response => response.json())
      .then(({ success, payload }) => {
        if (success && payload.employee) {
          console.log("success: ", success);
          console.log("payload: ", payload);
          const newEmployee = payload.employee;
          this.setState(state => ({
            employees: [...state.employees, newEmployee]
          }));
        } else {
          alert("Employee not found.");
        }
      })
      .catch(err => alert("Employee not found."));
  };

  print = () => {
    window.print();
  };

  render() {
    return (
      <>
        <div className={css.masterContainer}>
          <div className={css.BankAndEmployeeContainer}>
            <div className={css.talentBankContainer}>
              <div className={css.inputContainer}>
                <TextField placeholder="Session name" />
                <TextField type="date" />

                <TextField
                  style={{ marginTop: "1.5rem" }}
                  onChange={event => this.handleSearch(event)}
                  fullWidth="true"
                  placeholder="search by employee number"
                />

                <Button
                  className={css.btn}
                  // variant="extendedFab"
                  color="secondary"
                  onClick={this.findEmployee}
                >
                  Find Employee
                </Button>
              </div>
              <TalentBank
                gridPosition={this.state.gridPosition0}
                employees={this.state.employees}
                onDragOver={event => this.onDragOver(event)}
                handleDrop={this.handleDrop}
                gridPosition1={this.state.gridPosition1}
                gridPosition2={this.state.gridPosition2}
                gridPosition3={this.state.gridPosition3}
                gridPosition4={this.state.gridPosition4}
                gridPosition5={this.state.gridPosition5}
                gridPosition6={this.state.gridPosition6}
                gridPosition7={this.state.gridPosition7}
                gridPosition8={this.state.gridPosition8}
                gridPosition9={this.state.gridPosition9}
                employees={this.state.employees}
              />
            </div>
            <Grid
              handleDrop={this.handleDrop}
              gridPosition1={this.state.gridPosition1}
              gridPosition2={this.state.gridPosition2}
              gridPosition3={this.state.gridPosition3}
              gridPosition4={this.state.gridPosition4}
              gridPosition5={this.state.gridPosition5}
              gridPosition6={this.state.gridPosition6}
              gridPosition7={this.state.gridPosition7}
              gridPosition8={this.state.gridPosition8}
              gridPosition9={this.state.gridPosition9}
              employees={this.state.employees}
            />
          </div>
          <div className={css.buttonsContainer}>
            <Button color="secondary" onClick={this.prepopulate}>
              Preopulate
            </Button>
            <Button color="secondary" onClick={this.reset}>
              Reset
            </Button>
            <Button color="secondary">Save</Button>
            <Button color="secondary" onClick={this.print}>
              Print
            </Button>
            <Button color="secondary">Email</Button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
