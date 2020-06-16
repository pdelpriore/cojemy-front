import { getAddressCases } from "../../../config/cases/Cases";

export const getAddress = (addressValue) => {
  return async (dispatch, getState) => {
    dispatch({ type: getAddressCases.LOADING, payload: true });
    try {
      const response = await fetch("http://localhost:4000/heremaprequest", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressValue: addressValue,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
