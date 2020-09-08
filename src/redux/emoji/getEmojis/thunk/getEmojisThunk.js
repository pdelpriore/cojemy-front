import { getEmojisCases } from "../../../config/cases/Cases";

export const getEmojis = () => {
  return async (dispatch, getState) => {
    //dispatch({ type: getEmojisCases.LOADING, payload: true });
    try {
      const response = await fetch("http://localhost:4000/emojis", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData) {
        console.log(responseData);
      }
    } catch (err) {
      if (err) console.log(err);
      // dispatch({
      //   type: getLocationDetailsCases.ERROR,
      //   payload: capitalizeFirst(strings.error.FETCH_ERROR),
      // });
    }
  };
};
