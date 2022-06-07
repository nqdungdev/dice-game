import React, { Component } from "react";
import { connect } from "react-redux";
import { calcDice, randomDice } from "../redux/actions/diceActions";

class Result extends Component {
  render() {
    const { choose, totalWin, totalPlay, randomDice, calcDice } = this.props;
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3>
          BẠN CHỌN: <span className="text-success">{choose}</span>
        </h3>
        <h3>
          Số bàn thắng: <span className="text-danger">{totalWin}</span>
        </h3>
        <h3>
          Tổng số bàn chơi: <span className="text-warning">{totalPlay}</span>
        </h3>
        <button
          className="btn btn-success p-3 mt-3"
          onClick={(e) => {
            const intervalId = setInterval(() => {
              e.target.disabled = true;
              randomDice();
            }, 10);

            setTimeout(() => {
              clearInterval(intervalId);
              calcDice();
              e.target.disabled = false;
            }, 3000);
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choose: state.diceReducer.choose,
    totalWin: state.diceReducer.totalWin,
    totalPlay: state.diceReducer.totalPlay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calcDice: () => {
      dispatch(calcDice());
    },
    randomDice: () => {
      dispatch(randomDice());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
