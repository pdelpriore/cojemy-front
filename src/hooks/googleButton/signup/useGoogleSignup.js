import { signupGoogleUser } from "../../../redux/googleSignup/thunk/googleSignupThunk";
import { useDispatch } from "react-redux";

const useGoogleSignup = () => {
  const dispatch = useDispatch();

  const handleGoogleSuccessResponse = response => {
    dispatch(
      signupGoogleUser(
        response.profileObj.name,
        response.profileObj.email,
        response.profileObj.imageUrl
      )
    );
  };
  const handleGoogleFailureResponse = response => {
    console.log(response);
  };
  return { handleGoogleSuccessResponse, handleGoogleFailureResponse };
};

export default useGoogleSignup;
