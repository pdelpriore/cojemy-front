import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  getAddressClearState,
} from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { makeImageBinary } from "../../../shared/makeImageBinary";
import { selectEventAddressClearState } from "../../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getLocationDetailsClearState } from "../../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { generateZoom } from "../../../shared/generateZoom";

const useMyEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
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
  const handleDateTime = (dateTime) => {
    setInputs((inputs) => ({
      ...inputs,
      eventDate: dateTime,
    }));
  };
  const handleInitializeDate = () => {
    setInputs((inputs) => ({
      ...inputs,
      eventDate: new Date(),
    }));
  };
  const handlePicture = async (picture) => {
    try {
      const result = await makeImageBinary(picture);
      if (result) {
        setInputs((inputs) => ({
          ...inputs,
          recipeImage: result,
        }));
        if (error.imageError) {
          setError((error) =>
            (({ imageError, ...others }) => ({
              ...others,
            }))(error)
          );
        }
      }
    } catch (err) {
      if (err) {
        setError((error) => ({
          ...error,
          imageError: err,
        }));
      }
    }
  };
  const handleRemoveImage = () => {
    setInputs((inputs) =>
      (({ recipeImage, ...others }) => ({
        ...others,
      }))(inputs)
    );
    if (error.imageError) {
      setError((error) =>
        (({ imageError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
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
      if (locationDetailsRetrieved.displayPosition)
        setAddressObj((addressObj) => ({
          ...addressObj,
          streetNumber: selectedAddress.address.houseNumber,
          streetName: selectedAddress.address.street,
          postCode: selectedAddress.address.postalCode,
          city: selectedAddress.address.city,
          latitude: locationDetailsRetrieved.displayPosition.latitude,
          longitude: locationDetailsRetrieved.displayPosition.longitude,
          zoom: generateZoom(selectedAddress),
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
  }, [
    selectedAddress,
    locationDetailsRetrieved.displayPosition,
    addressObj.streetNumber,
    dispatch,
  ]);

  useEffect(() => {
    if (
      selectedAddress.label &&
      selectedAddress.label === inputs.address &&
      inputs.address &&
      locationDetailsRetrieved.displayPosition
    ) {
      setShowMap(true);
    } else {
      setShowMap(false);
    }
  }, [
    selectedAddress.label,
    locationDetailsRetrieved.displayPosition,
    inputs.address,
  ]);

  useEffect(() => {
    return () => {
      dispatch(getAddressClearState());
      dispatch(selectEventAddressClearState());
      dispatch(getLocationDetailsClearState());
    };
  }, [dispatch]);

  return {
    inputs,
    showMap,
    showSuggestions,
    error,
    handleOnChange,
    handleDateTime,
    handleInitializeDate,
    handlePicture,
    handleRemoveImage,
  };
};

export default useMyEventsForm;
