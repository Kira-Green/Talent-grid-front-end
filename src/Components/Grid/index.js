import React, { Component } from "react";
import css from "./Grid.module.css";
import Cell from "../Cell";

class Grid extends Component {
    renderCell(i) {
        return <Cell value={i} />;
    }

    render() {
        return (
            <div className={css.gridContainer}>
                <div className={css.gridRow}>
                    <Cell data-position="1" />
                    <Cell data-position="2" />
                    <Cell data-position="3" />
                </div>
                <div className={css.gridRow}>
                    <Cell data-position="4" />
                    <Cell data-position="5" />
                    <Cell data-position="6" />
                </div>
                <div className={css.gridRow}>
                    <Cell data-position="7" />
                    <Cell data-position="8" />
                    <Cell data-position="9" />
                </div>
            </div>
        );
    }
}

export default Grid;
