import { useState, useCallback, useEffect } from "react";
import { remindMePassword } from "../../../redux/remindPassword/thunk/remindPasswordThunk";
import { showRemindPassComponent } from "../../../redux/showRemindPass/thunk/showRemindPassThunk";
import { useDispatch, useSelector } from "react-redux";

const useRemindPassForm = () => {
  const dispatch = useDispatch();
  const { passwordSent } = useSelector(state => state.remindPass);
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(remindMePassword(inputs.email));
  };

  let hideRemindPassComponent = useCallback(() => {
    return dispatch(showRemindPassComponent(false));
  }, [dispatch]);

  useEffect(() => {
    setInputs({});
    if (passwordSent) hideRemindPassComponent();
  }, [passwordSent, hideRemindPassComponent]);

  return {
    inputs,
    handleInputChange,
    handleSubmit
  };
};

export default useRemindPassForm;
