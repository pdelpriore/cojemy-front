import { showNewMessageFormCases } from "../../../config/cases/Cases";

const initialState = {
  newMessageFormShown: false,
};

const showNewMessageFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case showNewMessageFormCases.FORM_SHOWN:
      return {
        ...state,
        newMessageFormShown: action.payload,
      };
    default:
      return state;
  }
};

export default showNewMessageFormReducer;
