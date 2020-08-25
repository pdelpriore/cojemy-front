import { mailsComponentActiveCases } from "../../../config/cases/Cases";

export const mailsComponentActive = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: mailsComponentActiveCases.MAILS_ACTIVE, payload: bool });
  };
};
