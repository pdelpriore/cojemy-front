import { myEventPreviewCases } from "../../../config/cases/Cases";

const initialState = {
  loading: false,
  eventPreviewShown: false,
  eventPreviewError: null,
  eventPreviewData: {},
};

const eventPreviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case myEventPreviewCases.PREVIEW_SHOWN:
      return { ...state, eventPreviewShown: action.payload };
    case myEventPreviewCases.LOADING:
      return { ...state, loading: action.payload };
    case myEventPreviewCases.PREVIEW_DATA_RECEIVED:
      return { ...state, loading: false, eventPreviewData: action.payload };
    case myEventPreviewCases.ERROR:
      return { ...state, loading: false, eventPreviewError: action.payload };
    case myEventPreviewCases.CLEAR_ERROR_STATE:
      return { ...state, eventPreviewError: null };
    case myEventPreviewCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default eventPreviewReducer;
