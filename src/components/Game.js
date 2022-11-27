import React, { Component } from "react";
import { Board } from "./Board";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-ifo">
          <div>{}</div>
          <div>{}</div>
        </div>
      </div>
    );
  }
}

export default Game;
