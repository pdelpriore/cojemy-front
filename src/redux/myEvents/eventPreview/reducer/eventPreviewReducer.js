import { myEventPreviewCases } from "../../../config/cases/Cases";

const initialState = {
  eventPreviewShown: false,
  eventPreviewData: {},
};

const eventPreviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case myEventPreviewCases.PREVIEW_SHOWN:
      return { ...state, eventPreviewShown: action.payload };
    case myEventPreviewCases.PREVIEW_DATA_RECEIVED:
      return { ...state, eventPreviewData: action.payload };
    case myEventPreviewCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default eventPreviewReducer;
