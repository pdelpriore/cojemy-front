import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  getAddressClearState,
} from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { addNewEvent } from "../../../redux/myEvents/changeEvent/thunk/changeEventThunk";
import { makeImageBinary } from "../../../shared/makeImageBinary";
import { getImage } from "../../../shared/getImage";
import { selectEventAddressClearState } from "../../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getLocationDetailsClearState } from "../../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { changeEventClearState } from "../../../redux/myEvents/changeEvent/thunk/changeEventThunk";
import { toEditEventClearState } from "../../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import { showNewEventForm } from "../../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import { generateZoom } from "../../../shared/generateZoom";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

const useMyEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
  const [addressObj, setAddressObj] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const { selectedAddress } = useSelector(
    (state) => state.selectedEventAddress
  );
  const { addressChosen } = useSelector((state) => state.isEventAddressChosen);
  const { locationDetailsRetrieved } = useSelector(
    (state) => state.locationDetails
  );
  const { eventUpdated } = useSelector((state) => state.isEventChanged);
  const { userData } = useSelector((state) => state.login);
  const { eventToEdit } = useSelector((state) => state.toEditEvent);

  const handleOnChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === strings.myEvents.inputName.TITLE
          ? capitalizeFirst(e.target.value.replace(/[^0-9a-zA-Z-_.:,! ]+/g, ""))
          : e.target.name === strings.myEvents.inputName.DESCRIPTION
          ? capitalizeFirst(e.target.value)
          : e.target.name === strings.myEvents.inputName.AVAILABLE_PLACES
          ? parseInt(e.target.value) > 500
            ? (e.target.value = "500")
            : e.target.value[0] === "0"
            ? (e.target.value = "1")
            : e.target.value.replace(/[^0-9]+/g, "")
          : e.target.name === strings.myEvents.TEL
          ? e.target.value.replace(/[^0-9]+/g, "")
          : e.target.value,
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
      setLoadingImage(true);
      const result = await makeImageBinary(picture);
      if (result) {
        setLoadingImage(false);
        setInputs((inputs) => ({
          ...inputs,
          eventImage: result,
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
        setLoadingImage(false);
        setError((error) => ({
          ...error,
          imageError: err,
        }));
      }
    }
  };
  const handleRemoveImage = (e) => {
    e.preventDefault();
    setInputs((inputs) =>
      (({ eventImage, ...others }) => ({
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
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewEvent(
        inputs.title,
        inputs.eventImage,
        addressObj,
        inputs.description,
        parseInt(inputs.availablePlaces),
        inputs.eventDate,
        parseInt(inputs.tel),
        userData._id,
        userData.email
      )
    );
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
      if (
        locationDetailsRetrieved.displayPosition &&
        !eventToEdit.eventData.title
      )
        setAddressObj((addressObj) => ({
          ...addressObj,
          streetNumber: parseInt(selectedAddress.address.houseNumber),
          streetName: selectedAddress.address.street,
          postCode: selectedAddress.address.postalCode,
          city: selectedAddress.address.city,
          country: selectedAddress.address.country,
          latitude: locationDetailsRetrieved.displayPosition.latitude,
          longitude: locationDetailsRetrieved.displayPosition.longitude,
          zoom: generateZoom(selectedAddress),
        }));
      if (
        addressObj.streetName &&
        !addressObj.streetNumber &&
        !eventToEdit.eventData.title
      ) {
        setAddressObj((addressObj) =>
          (({ streetNumber, ...others }) => ({
            ...others,
          }))(addressObj)
        );
      } else if (
        addressObj.city &&
        !addressObj.streetName &&
        !addressObj.streetNumber &&
        !eventToEdit.eventData.title
      ) {
        setAddressObj((addressObj) =>
          (({ streetName, streetNumber, ...others }) => ({
            ...others,
          }))(addressObj)
        );
      } else if (
        addressObj.country &&
        !addressObj.city &&
        !addressObj.streetName &&
        !addressObj.streetNumber &&
        !eventToEdit.eventData.title
      ) {
        setAddressObj((addressObj) =>
          (({ streetName, streetNumber, city, ...others }) => ({
            ...others,
          }))(addressObj)
        );
      }
    } else if (!selectedAddress.label && !eventToEdit.eventData) {
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
    addressObj.city,
    addressObj.streetName,
    addressObj.streetNumber,
    addressObj.country,
    eventToEdit,
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
    if (eventToEdit.eventData) {
      (async () => {
        setLoadingImage(true);
        const result =
          eventToEdit.eventData.eventImage &&
          (await getImage(eventToEdit.eventData.eventImage));
        if (result || result === null) setLoadingImage(false);
        setInputs((inputs) => ({
          ...inputs,
          title: eventToEdit.eventData.title,
          eventImage: result && {
            image: result.imageBinary,
            imageName: result.pictureName,
          },
          address: `${eventToEdit.addressData.streetName} ${eventToEdit.addressData.streetNumber}, ${eventToEdit.addressData.city}`,
          description: eventToEdit.eventData.description,
          availablePlaces: eventToEdit.eventData.availablePlaces.toString(),
          eventDate: new Date(eventToEdit.eventData.eventDate),
          tel: eventToEdit.eventData.tel,
        }));
        if (result === null)
          setInputs((inputs) =>
            (({ eventImage, ...others }) => ({
              ...others,
            }))(inputs)
          );
        setAddressObj((addressObj) => ({
          ...addressObj,
          streetNumber: eventToEdit.addressData.streetNumber,
          streetName: eventToEdit.addressData.streetName,
          postCode: eventToEdit.addressData.postCode,
          city: eventToEdit.addressData.city,
          country: eventToEdit.addressData.country,
          latitude: eventToEdit.addressData.latitude,
          longitude: eventToEdit.addressData.longitude,
          zoom: eventToEdit.addressData.zoom,
        }));
        setShowSuggestions(false);
        setShowMap(true);
      })();
    }
  }, [eventToEdit]);

  useEffect(() => {
    if (eventUpdated) {
      setInputs({});
      setAddressObj({});
      dispatch(changeEventClearState());
      dispatch(showNewEventForm(false));
    }
    return () => {
      dispatch(getAddressClearState());
      dispatch(selectEventAddressClearState());
      dispatch(getLocationDetailsClearState());
      dispatch(toEditEventClearState());
    };
  }, [eventUpdated, dispatch]);

  return {
    inputs,
    addressObj,
    showMap,
    showSuggestions,
    error,
    loadingImage,
    handleOnChange,
    handleDateTime,
    handleInitializeDate,
    handlePicture,
    handleRemoveImage,
    handleSubmit,
  };
};

export default useMyEventsForm;
