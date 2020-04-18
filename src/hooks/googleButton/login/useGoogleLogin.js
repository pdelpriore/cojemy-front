import { useDispatch } from "react-redux";
import { loginUserGoogle } from "../../../redux/login/thunk/loginThunk";

const useGoogleSignup = () => {
  const dispatch = useDispatch();

  const handleGoogleSuccessResponse = (response) => {
    dispatch(loginUserGoogle(response.profileObj.email, response.tokenId));
  };
  const handleGoogleFailureResponse = (response) => {
    console.log(response);
  };
  return { handleGoogleSuccessResponse, handleGoogleFailureResponse };
};

export default useGoogleSignup;
