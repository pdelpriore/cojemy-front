import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAddress } from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";

const useMyEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleOnChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    dispatch(getAddress(inputs.address));
  }, [inputs.address]);
  return { inputs, handleOnChange };
};

export default useMyEventsForm;
