import { userLoggedCases } from "../../../config/cases/Cases";

export const loginUser = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: userLoggedCases.USER_LOGGED,
      payload: bool,
    });
  };
};
