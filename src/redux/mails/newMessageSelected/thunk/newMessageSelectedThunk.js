import { newMessageSelectedCases } from "../../../config/cases/Cases";

export const newMessage = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: newMessageSelectedCases.SELECTED, payload: bool });
  };
};
