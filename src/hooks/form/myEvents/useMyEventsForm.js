import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  getAddressClearState,
} from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { getLocationDetails } from "../../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { selectEventAddressClearState } from "../../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getLocationDetailsClearState } from "../../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";

const useMyEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [addressObj, setAddressObj] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const { selectedAddress } = useSelector(
    (state) => state.selectedEventAddress
  );
  const { addressChosen } = useSelector((state) => state.isEventAddressChosen);
  const { locationDetailsRetrieved } = useSelector(
    (state) => state.locationDetails
  );

  const handleOnChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (inputs.address) {
      dispatch(getAddress(inputs.address));
      setShowSuggestions(true);
    } else {
      dispatch(getAddressClearState());
      dispatch(selectEventAddressClearState());
      setShowSuggestions(false);
      setAddressObj({});
    }
  }, [inputs.address, dispatch]);

  useEffect(() => {
    if (addressChosen && inputs.address) setShowSuggestions(false);
  }, [addressChosen, inputs.address]);

  useEffect(() => {
    if (selectedAddress.label) {
      setInputs((inputs) => ({
        ...inputs,
        address: selectedAddress.label,
      }));
      dispatch(getLocationDetails(selectedAddress.locationId));
      if (selectedAddress.label && locationDetailsRetrieved.displayPosition)
        setAddressObj((addressObj) => ({
          ...addressObj,
          streetNumber: selectedAddress.address.houseNumber,
          streetName: selectedAddress.address.street,
          postCode: selectedAddress.address.postalCode,
          city: selectedAddress.address.city,
          latitude: locationDetailsRetrieved.displayPosition.latitude,
          longitude: locationDetailsRetrieved.displayPosition.longitude,
          zoom:
            selectedAddress.address.houseNumber &&
            selectedAddress.address.street &&
            selectedAddress.address.city &&
            selectedAddress.address.country
              ? 17
              : !selectedAddress.address.houseNumber &&
                selectedAddress.address.street &&
                selectedAddress.address.city &&
                selectedAddress.address.country
              ? 15
              : !selectedAddress.address.houseNumber &&
                !selectedAddress.address.street &&
                selectedAddress.address.city &&
                selectedAddress.address.country
              ? 10
              : !selectedAddress.address.houseNumber &&
                !selectedAddress.address.street &&
                !selectedAddress.address.city &&
                selectedAddress.address.country
              ? 4
              : 10,
        }));
      if (addressObj.streetNumber === undefined)
        setAddressObj((addressObj) =>
          (({ streetNumber, ...others }) => ({
            ...others,
          }))(addressObj)
        );
    } else {
      setInputs((inputs) =>
        (({ address, ...others }) => ({
          ...others,
        }))(inputs)
      );
      setAddressObj({});
    }
  }, [selectedAddress, locationDetailsRetrieved.displayPosition, dispatch]);

  useEffect(() => {
    if (
      selectedAddress.label &&
      selectedAddress.label === inputs.address &&
      inputs.address
    ) {
      setShowMap(true);
    } else {
      setShowMap(false);
    }
  }, [selectedAddress.label, inputs.address]);

  useEffect(() => {
    return () => {
      dispatch(getAddressClearState());
      dispatch(selectEventAddressClearState());
      dispatch(getLocationDetailsClearState());
    };
  }, [dispatch]);

  return { inputs, showMap, showSuggestions, handleOnChange };
};

export default useMyEventsForm;
