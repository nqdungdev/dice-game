import React, { Component } from "react";
import { connect } from "react-redux";

class Bet extends Component {
  render() {
    const { diceArray, onBet } = this.props;
    return (
      <div>
        <div className="row mb-5 text-center ">
          <div className="col-3">
            <button className="btn btn-info p-4" onClick={() => onBet("TÀI")}>
              <h1>Tài</h1>
            </button>
          </div>
          <div className="col-6">
            {diceArray.map((dice, index) => (
              <img
                key={index}
                src={dice.src}
                alt={dice.src}
                className="mx-2"
                width={50}
                height={50}
              />
            ))}
          </div>
          <div className="col-3">
            <button className="btn btn-info p-4" onClick={() => onBet("XỈU")}>
              <h1>Xỉu</h1>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diceArray: state.diceReducer.diceArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBet: (value) => {
      const action = { type: "BET", value };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bet);
