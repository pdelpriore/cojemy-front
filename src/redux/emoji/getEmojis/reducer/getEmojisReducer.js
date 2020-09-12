import { getEmojisCases } from "../../../config/cases/Cases";

const initialState = {
  emojisAll: [],
  emojiCategories: [],
  emojiError: null,
};

const getEmojisReducer = (state = initialState, action) => {
  switch (action.type) {
    case getEmojisCases.EMOJIS_RETRIEVED:
      return { ...state, emojisAll: action.payload };
    case getEmojisCases.CATEGORIES_RETRIEVED:
      return { ...state, emojiCategories: action.payload };
    case getEmojisCases.ERROR:
      return { ...state, ...initialState, emojiError: action.payload };
    case getEmojisCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default getEmojisReducer;
