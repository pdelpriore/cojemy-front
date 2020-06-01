import { useState, useEffect } from "react";
import { remindMePassword } from "../../../redux/remindPassword/remindUserPassword/thunk/remindPasswordThunk";
import { showRemindPassComponent } from "../../../redux/remindPassword/showRemindPass/thunk/showRemindPassThunk";
import { useDispatch, useSelector } from "react-redux";

const useRemindPassForm = () => {
  const dispatch = useDispatch();
  const { passwordSent } = useSelector((state) => state.remindPass);
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(remindMePassword(inputs.email));
  };

  useEffect(() => {
    setInputs({});
    if (passwordSent) dispatch(showRemindPassComponent(false));
  }, [passwordSent, dispatch]);

  return {
    inputs,
    handleInputChange,
    handleSubmit,
  };
};

export default useRemindPassForm;
