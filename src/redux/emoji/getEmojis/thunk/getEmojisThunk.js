import { getEmojisCases, showEmojisCases } from "../../../config/cases/Cases";
import { isEmojiSupported } from "is-emoji-supported";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const getEmojis = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(strings.path.GET_EMOJIS, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.length > 0) {
        dispatch({
          type: getEmojisCases.EMOJIS_RETRIEVED,
          payload: responseData.filter((emoji) =>
            isEmojiSupported(emoji.character)
          ),
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showEmojisCases.EMOJIS_SHOWN, payload: false });
        dispatch({
          type: getEmojisCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const getEmojiCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(strings.path.GET_EMOJI_CAT, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData) {
        dispatch({
          type: getEmojisCases.CATEGORIES_RETRIEVED,
          payload: responseData,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showEmojisCases.EMOJIS_SHOWN, payload: false });
        dispatch({
          type: getEmojisCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const getEmojisClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: getEmojisCases.CLEAR_STATE });
  };
};
