import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { strings } from "../../../strings/Strings";
import { userGooglePhoto } from "../../../shared/testWordsArray";

const useMyProfilePreview = () => {
  const [inputUserPhoto, setInputUserPhoto] = useState({});
  const { userData } = useSelector((state) => state.login);

  useEffect(() => {
    if (
      !userGooglePhoto.some(
        (element) => userData.photo && userData.photo.includes(element)
      ) &&
      userData.photo
    )
      setInputUserPhoto((inputUserPhoto) => ({
        ...inputUserPhoto,
        userPhoto: strings.path.IMAGE_REQUEST + userData.photo,
      }));
    if (userData.photo === null && inputUserPhoto && inputUserPhoto.userPhoto)
      setInputUserPhoto({});
  }, [userData.photo]);

  return { inputUserPhoto, userData };
};

export default useMyProfilePreview;
