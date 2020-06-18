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
        console.log(responseData.response);
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
            mapView: {
              bottomRight: {
                latitude:
                  responseData.response.view[0].result[0].location.mapView
                    .bottomRight.latitude,
                longitude:
                  responseData.response.view[0].result[0].location.mapView
                    .bottomRight.longitude,
              },
              topLeft: {
                latitude:
                  responseData.response.view[0].result[0].location.mapView
                    .topLeft.latitude,
                longitude:
                  responseData.response.view[0].result[0].location.mapView
                    .topLeft.longitude,
              },
            },
          },
        });
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
