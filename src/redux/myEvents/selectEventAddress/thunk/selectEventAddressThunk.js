import {
  selectEventAddressCases,
  chooseEventAddressCases,
} from "../../../config/cases/Cases";

export const selectEventAddress = (addressObj) => {
  return (dispatch, getState) => {
    dispatch({
      type: selectEventAddressCases.ADDRESS_SELECTED,
      payload: addressObj,
    });
    dispatch({ type: chooseEventAddressCases.ADDRESS_CHOSEN, payload: true });
  };
};

export const selectEventAddressClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: selectEventAddressCases.CLEAR_STATE });
  };
};
