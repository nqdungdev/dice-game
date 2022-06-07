import { BET_DICE, CALC_DICE, RANDOM_DICE } from "../constants/diceConstants";

export const betDice = (value) => {
  return { type: BET_DICE, value };
};
export const randomDice = () => {
  return { type: RANDOM_DICE };
};

export const calcDice = () => {
  return { type: CALC_DICE };
};
