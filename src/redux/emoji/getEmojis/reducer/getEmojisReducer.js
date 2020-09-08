import { getEmojisCases } from "../../../config/cases/Cases";

const initialState = {
  emojiLoading: false,
  emojisAll: [],
  emojiError: null,
};

const getEmojisReducer = (state = initialState, action) => {
  switch (action.type) {
    case getEmojisCases.LOADING:
      return { ...state, emojiLoading: action.payload };
    case getEmojisCases.EMOJIS_RETRIEVED:
      return { ...state, ...initialState, emojisAll: action.payload };
    case getEmojisCases.ERROR:
      return { ...state, ...initialState, emojiError: action.payload };
    case getEmojisCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default getEmojisReducer;
