import { chooseEventAddressCases } from "../../../config/cases/Cases";

export const chooseEventAddress = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: chooseEventAddressCases.ADDRESS_CHOSEN, payload: bool });
  };
};
