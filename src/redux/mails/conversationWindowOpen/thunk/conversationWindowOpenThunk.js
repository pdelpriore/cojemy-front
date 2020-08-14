import { conversationWindowOpenCases } from "../../../config/cases/Cases";

export const conversationWindowOpen = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: conversationWindowOpenCases.WINDOW_OPEN, payload: bool });
  };
};
