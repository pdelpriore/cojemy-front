import { getLocationDetailsCases } from "../../../config/cases/Cases";

export const getLocationDetails = (locationId) => {
  return async (dispatch, getState) => {
    dispatch({ type: getLocationDetailsCases.LOADING, payload: true });
    try {
      const response = await fetch("http://localhost:4000/heremaplocation", {
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
        console.log(responseData);
        //   dispatch({
        //     type: getLocationDetailsCases.LOCATION_DETAILS_RETRIEVED,
        //     payload: responseData.suggestions,
        //   });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const getLocationDetailsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: getLocationDetailsCases.CLEAR_STATE });
  };
};
