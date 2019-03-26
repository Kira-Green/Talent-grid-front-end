import React from "react";
import Employee from "../Employee";
import css from "./TalentBank.module.css";

const TalentBank = props => (
    <ul className={css.bank}>
        {props.employees.map((item, idx) => (
            <Employee
                key={idx}
                name={item.name}
                staffNumber={item.staffNumber}
            />
        ))}
    </ul>
);

export default TalentBank;
