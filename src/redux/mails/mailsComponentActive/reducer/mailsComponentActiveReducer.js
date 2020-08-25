import { mailsComponentActiveCases } from "../../../config/cases/Cases";

const initialState = {
  mailsActive: false,
};

const mailsComponentActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case mailsComponentActiveCases.MAILS_ACTIVE:
      return { ...state, mailsActive: action.payload };
    default:
      return state;
  }
};

export default mailsComponentActiveReducer;
