import { useState } from "react";

const useMyProfileForm = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});

  const handlePicture = (picture) => {};
  const handleRemoveImage = () => {};

  return { inputs };
};

export default useMyProfileForm;
