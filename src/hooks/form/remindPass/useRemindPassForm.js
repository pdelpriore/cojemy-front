import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRemindPassForm = () => {
  const dispatch = useDispatch();
  //   const { userSignedup } = useSelector(state => state.signup);

  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);

  const remindPassHandleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const remindPassHandleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   signupUser(
    //     inputs.name,
    //     inputs.email,
    //     inputs.confirmEmail,
    //     inputs.password
    //   )
    // );
  };

  const componentVisible = useCallback(
    bool => {
      if (bool) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [setShow]
  );

  return {
    inputs,
    remindPassHandleInputChange,
    remindPassHandleSubmit,
    show,
    componentVisible
  };
};

export default useRemindPassForm;
