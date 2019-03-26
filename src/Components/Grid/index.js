import React, { Component } from "react";
import css from "./Grid.module.css";
import Element from "../Element";

class Grid extends Component {
    renderElement(i) {
        return <Element value={i} />;
    }

    render() {
        return (
            <div className={css.gridContainer}>
                <div className={css.gridRow}>
                    <Element employee={this.props.employee} />
                    <Element />
                    <Element />
                </div>
                <div className={css.gridRow}>
                    <Element />
                    <Element />
                    <Element />
                </div>
                <div className={css.gridRow}>
                    <Element />
                    <Element />
                    <Element />
                </div>
            </div>
        );
    }
}

export default Grid;
