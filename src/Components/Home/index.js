import React from "react";
import Login from "../Login";
import Register from "../Register";
import Authed from "../Authed";
import css from "./Home.module.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={css.masterContainer}>
          <h1>Welcome to Talent Grid</h1>
          <div className={css.one}>
            <div className={css.square} />

            <div className={css.square} />
            <div className={css.square} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
