import { showEmojisCases } from "../../../config/cases/Cases";

const initialState = {
  emojisShown: false,
};

const showEmojisReducer = (state = initialState, action) => {
  switch (action.type) {
    case showEmojisCases.EMOJIS_SHOWN:
      return { ...state, emojisShown: action.payload };
    default:
      return state;
  }
};

export default showEmojisReducer;
