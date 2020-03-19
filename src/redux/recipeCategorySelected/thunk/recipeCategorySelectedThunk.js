import { recipeCategorySelectedCases } from "../../config/cases/Cases";

export const categorySelected = buttonId => {
  return (dispatch, getState) => {
    dispatch({
      type: recipeCategorySelectedCases.BUTTON_ID_RETRIEVED,
      payload: buttonId
    });
  };
};

export const categorySelectedClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: recipeCategorySelectedCases.CLEAR_STATE });
  };
};
