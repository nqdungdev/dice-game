import React, { Component } from "react";
import Bet from "./Bet";
import Result from "./Result";
import bgGame from "../assets/img/bgGame.png";

export default class DiceGame extends Component {
  render() {
    return (
      <section
        style={{
          background: `url(${bgGame}) 100% 100% / cover no-repeat`,
          height: "100vh",
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container">
          <h1 className="text-center mb-5">GAME ĐỔ XÚC XẮC</h1>
          <Bet />
          <Result />
        </div>
      </section>
    );
  }
}
