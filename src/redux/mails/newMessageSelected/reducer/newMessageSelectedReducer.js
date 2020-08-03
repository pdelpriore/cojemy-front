import { newMessageSelectedCases } from "../../../config/cases/Cases";

const initialState = {
  newMessageSelected: false,
};

const newMessageSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case newMessageSelectedCases.SELECTED:
      return { ...state, newMessageSelected: action.payload };
    default:
      return state;
  }
};

export default newMessageSelectedReducer;
