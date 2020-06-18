import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  getAddressClearState,
} from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { selectEventAddressClearState } from "../../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";

const useMyEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [addressObj, setAddressObj] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { selectedAddress } = useSelector(
    (state) => state.selectedEventAddress
  );
  const { addressChosen } = useSelector((state) => state.isEventAddressChosen);

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
      setAddressObj((addressObj) => ({
        ...addressObj,
        streetNumber: selectedAddress.address.houseNumber,
        streetName: selectedAddress.address.street,
        postCode: selectedAddress.address.postalCode,
        city: selectedAddress.address.city,
      }));
      if (addressObj.streetNumber === undefined)
        setAddressObj((addressObj) =>
          (({ streetNumber, ...others }) => ({
            ...others,
          }))(addressObj)
        );
      if (addressObj.streetName === undefined)
        setAddressObj((addressObj) =>
          (({ streetName, ...others }) => ({
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
  }, [selectedAddress.label]);

  // kiedy formularz bedzie juz gotowy do wyslania
  // stworz obiekt address z danymi z selectedAddress.address i dispatchuj do DB
  // input.address jest tylko do podgladu dla uzytkownika (nie wysylaj go !)

  return { inputs, showSuggestions, handleOnChange };
};

export default useMyEventsForm;
