import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import { customerContact } from "../../../redux/customerContact/thunk/customerContactThunk";
import { useSelector, useDispatch } from "react-redux";

const useContactForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const { emailSent } = useSelector((state) => state.customerContact);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === "email"
          ? e.target.value
          : capitalizeFirst(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(customerContact(inputs.subject, inputs.email, inputs.message));
  };

  useEffect(() => {
    setInputs({});
  }, [emailSent]);

  return { inputs, handleInputChange, handleSubmit };
};

export default useContactForm;
