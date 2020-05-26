import { useState } from "react";

const useMyPasswordForm = () => {
  const [inputs, setInputs] = useState({});

  return { inputs };
};

export default useMyPasswordForm;
