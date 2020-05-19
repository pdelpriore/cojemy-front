import { useState } from "react";
import { makeImageBinary } from "../../../shared/makeImageBinary";

const useMyProfileForm = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
  const [showOverlay, setShowOverlay] = useState(true);
  const [showEdit, setShowEdit] = useState(true);

  const handlePicture = async (picture) => {
    try {
      const result = await makeImageBinary(picture);
      if (result) {
        setInputs((inputs) => ({
          ...inputs,
          profileImage: result,
        }));
        if (error.imageError) {
          setError((error) =>
            (({ imageError, ...others }) => ({
              ...others,
            }))(error)
          );
        }
      }
    } catch (err) {
      if (err) {
        setError((error) => ({
          ...error,
          imageError: err,
        }));
      }
    }
  };
  const handleRemoveImage = () => {
    setInputs((inputs) =>
      (({ profileImage, ...others }) => ({
        ...others,
      }))(inputs)
    );
    if (error.imageError) {
      setError((error) =>
        (({ imageError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
  };

  const handleEdit = () => {
    setShowOverlay(false);
    setShowEdit(false);
  };

  return {
    inputs,
    error,
    showOverlay,
    showEdit,
    handlePicture,
    handleRemoveImage,
    handleEdit,
  };
};

export default useMyProfileForm;
