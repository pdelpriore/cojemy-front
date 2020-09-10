import { selectEmojiCases } from "../../../config/cases/Cases";

const initialState = {
  emojiCharacter: null,
};

const selectEmojiReducer = (state = initialState, action) => {
  switch (action.type) {
    case selectEmojiCases.EMOJI_SELECTED:
      return { ...state, emojiCharacter: action.payload };
    case selectEmojiCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default selectEmojiReducer;
