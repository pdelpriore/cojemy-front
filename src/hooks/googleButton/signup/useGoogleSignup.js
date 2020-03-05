const useGoogleSignup = () => {
  const handleGoogleSuccessResponse = response => {
    console.log(response);
  };
  const handleGoogleFailureResponse = response => {
    console.log(response);
  };
  return { handleGoogleSuccessResponse, handleGoogleFailureResponse };
};

export default useGoogleSignup;
