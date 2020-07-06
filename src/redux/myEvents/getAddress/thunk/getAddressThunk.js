import { getAddressCases } from "../../../config/cases/Cases";
import { capitalizeFirst } from "../../../../util/Util";
import { strings } from "../../../../strings/Strings";

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
      if (responseData) {
        dispatch({
          type: getAddressCases.ADDRESSES_RETRIEVED,
          payload: responseData.suggestions,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: getAddressCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const getAddressClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: getAddressCases.CLEAR_STATE });
  };
};
