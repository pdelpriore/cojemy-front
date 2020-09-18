import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import { strings } from "../../../strings/Strings";

const useLogin = () => {
  const history = useHistory();

  const [emailConfirmed, setEmailConfirmed] = useState(null);

  const { userData } = useSelector((state) => state.login);

  useEffect(() => {
    const cookieEmailConfirmed = cookie.load("emailConfirmed");
    if (cookieEmailConfirmed) setEmailConfirmed(cookieEmailConfirmed);
    return () => setEmailConfirmed(null);
  }, []);

  useEffect(() => {
    if (userData.email !== undefined) history.push(strings.path.RECIPE_BOOK);
  }, [userData, history]);

  return { emailConfirmed };
};

export default useLogin;
