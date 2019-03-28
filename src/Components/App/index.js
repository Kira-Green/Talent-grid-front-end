import React, { Component } from "react";
import css from "./App.module.css";
import Grid from "../Grid";
import TalentBank from "../TalentBank";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import TextField from "@material-ui/core/TextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridPosition0: "TalentBank",
      gridPosition1: "Exceptional Team Talent",
      gridPosition2: "Exceptional Functional Talent",
      gridPosition3: "Exceptional Organisational Talent",
      gridPosition4: "Strong Team Professional",
      gridPosition5: "Strong Functional Talent",
      gridPosition6: "Strong Organisational Talent",
      gridPosition7: "Team Potential",
      gridPosition8: "Functional Potential",
      gridPosition9: "Organisational Potential",

      employees: [
        {
          name: "Kira Green",
          staffNumber: "E123226",
          position: "TalentBank"
        },
        {
          name: "Manu Magalhaes",
          staffNumber: "E654534",
          position: "TalentBank"
        },
        {
          name: "Stuart Roper",
          staffNumber: "E135790",
          position: "TalentBank"
        },
        {
          name: "Donald Trump",
          staffNumber: "E1231187",
          position: "TalentBank"
        },
        {
          name: "Theresa May",
          staffNumber: "E654324",
          position: "TalentBank"
        },
        {
          name: "Jeremy Corbyn",
          staffNumber: "E136543",
          position: "TalentBank"
        },
        {
          name: "Mickey Mouse",
          staffNumber: "E123456",
          position: "TalentBank"
        },
        {
          name: "Donald Duck",
          staffNumber: "E546744",
          position: "TalentBank"
        },
        {
          name: "Spongebob Squarepants",
          staffNumber: "E137546",
          position: "TalentBank"
        },
        {
          name: "Micheal Knight",
          staffNumber: "E123123",
          position: "TalentBank"
        }
      ]
    };
  }

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

  render() {
    return (
      <div className={css.BankAndEmployeeContainer}>
        <div className={css.talentBankContainer}>
          <TextField fullWidth="true" placeholder="search by employee number" />
          <TalentBank
            gridPosition={this.state.gridPosition0}
            employees={this.state.employees}
            onDragOver={event => this.onDragOver(event)}
            handleDrop={this.handleDrop}
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
        <Button variant="extendedFab">Add Employee</Button>;
      </div>
    );
  }
}

export default App;
