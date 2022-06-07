import d1 from "../../assets/img/1.png";
import d2 from "../../assets/img/2.png";
import d3 from "../../assets/img/3.png";
import d4 from "../../assets/img/4.png";
import d5 from "../../assets/img/5.png";
import d6 from "../../assets/img/6.png";
import { BET_DICE, CALC_DICE, RANDOM_DICE } from "../constants/diceConstants";

const diceList = [
  { id: 1, src: d1, value: 1 },
  { id: 2, src: d2, value: 2 },
  { id: 3, src: d3, value: 3 },
  { id: 4, src: d4, value: 4 },
  { id: 5, src: d5, value: 5 },
  { id: 6, src: d6, value: 6 },
];

const initialState = {
  diceArray: [
    { id: 1, src: d1, value: 1 },
    { id: 2, src: d2, value: 2 },
    { id: 3, src: d3, value: 3 },
  ],

  choose: "TÀI",
  totalWin: 0,
  totalPlay: 0,
};

const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BET_DICE: {
      return { ...state, choose: action.value };
    }
    case RANDOM_DICE: {
      //random xí ngầu
      const diceArray = state.diceArray.map((dice, index) => {
        const randomDiceIndex = Math.floor(Math.random() * diceList.length);
        return (dice[index] = diceList[randomDiceIndex]);
      });

      return { ...state, diceArray };
    }
    case CALC_DICE: {
      let totalWin = state.totalWin;
      //tính điểm
      const point = state.diceArray.reduce((total, dice) => {
        return total + dice.value;
      }, 0);
      if (
        (point <= 10 && state.choose === "XỈU") ||
        (point > 10 && state.choose === "TÀI")
      ) {
        totalWin += 1;
      }

      return { ...state, totalWin, totalPlay: (state.totalPlay += 1) };
    }
    default:
      return { ...state };
  }
};

export default diceReducer;
