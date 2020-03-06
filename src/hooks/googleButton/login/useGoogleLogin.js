import { useDispatch } from "react-redux";

const useGoogleSignup = () => {
  const dispatch = useDispatch();

  const handleGoogleSuccessResponse = response => {
    console.log(response);
  };
  const handleGoogleFailureResponse = response => {
    console.log(response);
  };
  return { handleGoogleSuccessResponse, handleGoogleFailureResponse };
};

export default useGoogleSignup;
