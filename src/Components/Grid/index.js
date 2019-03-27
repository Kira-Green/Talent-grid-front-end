import React, { Component } from "react";
import css from "./Grid.module.css";
import Cell from "../Cell";

class Grid extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  // renderCell(i) {
  //     return <Cell value={i} />;
  // }

  render() {
    return (
      <div className={css.gridContainer}>
        <div className={css.gridRow}>
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition1}
            handleDrop={this.props.handleDrop}
          />
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition2}
            handleDrop={this.props.handleDrop}
          />
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition3}
            handleDrop={this.props.handleDrop}
          />
        </div>
        <div className={css.gridRow}>
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition4}
            handleDrop={this.props.handleDrop}
          />
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition5}
            handleDrop={this.props.handleDrop}
          />
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition6}
            handleDrop={this.props.handleDrop}
          />
        </div>
        <div className={css.gridRow}>
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition7}
            handleDrop={this.props.handleDrop}
          />
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition8}
            handleDrop={this.props.handleDrop}
          />
          <Cell
            employees={this.props.employees}
            gridPosition={this.props.gridPosition9}
            handleDrop={this.props.handleDrop}
          />
        </div>
      </div>
    );
  }
}

export default Grid;
