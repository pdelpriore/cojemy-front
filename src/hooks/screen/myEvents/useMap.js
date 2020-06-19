import { useState } from "react";

const useMap = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleHideLoading = () => {
    setShowLoading(false);
  };

  return { showLoading, handleHideLoading };
};

export default useMap;
