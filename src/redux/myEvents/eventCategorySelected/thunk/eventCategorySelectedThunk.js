import { eventCategorySelectedCases } from "../../../config/cases/Cases";

export const eventCategorySelected = (buttonId) => {
  return (dispatch, getState) => {
    dispatch({
      type: eventCategorySelectedCases.BUTTON_ID_RETRIEVED,
      payload: buttonId,
    });
  };
};
