import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { choose, totalWin, totalPlay, onRandom, onCalc } = this.props;
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
          onClick={() => {
            const intervalId = setInterval(() => {
              onRandom();
            }, 10);

            setTimeout(() => {
              clearInterval(intervalId);
              onCalc();
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
    onCalc: () => {
      const action = { type: "CALC_DICE" };
      dispatch(action);
    },
    onRandom: () => {
      const action = { type: "RANDOM_DICE" };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
