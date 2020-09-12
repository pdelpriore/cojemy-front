import { getLocationDetailsCases } from "../../../config/cases/Cases";
import { capitalizeFirst } from "../../../../util/Util";
import { strings } from "../../../../strings/Strings";

export const getLocationDetails = (locationId) => {
  return async (dispatch, getState) => {
    dispatch({ type: getLocationDetailsCases.LOADING, payload: true });
    try {
      const response = await fetch(strings.path.GET_LOCATION, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationId: locationId,
        }),
      });
      const responseData = await response.json();
      if (responseData) {
        dispatch({
          type: getLocationDetailsCases.LOCATION_DETAILS_RETRIEVED,
          payload: {
            displayPosition: {
              latitude:
                responseData.response.view[0].result[0].location.displayPosition
                  .latitude,
              longitude:
                responseData.response.view[0].result[0].location.displayPosition
                  .longitude,
            },
          },
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: getLocationDetailsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const getLocationDetailsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: getLocationDetailsCases.CLEAR_STATE });
  };
};
