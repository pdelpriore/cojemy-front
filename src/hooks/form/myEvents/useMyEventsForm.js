import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAddress } from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";

const useMyEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);

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
      setShowSuggestions(false);
    }
  }, [inputs.address, dispatch]);
  return { inputs, showSuggestions, handleOnChange };
};

export default useMyEventsForm;
