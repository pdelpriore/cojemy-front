import { strings } from "../strings/Strings";

export const getImage = async (image) => {
  const result = await new Promise(async (resolve, reject) => {
    const pictureName = image.split("/").slice(3).toString();
    const pictureType = pictureName.split(".").slice(1).toString();

    const response = await fetch(strings.path.IMAGE_REQUEST + image);
    const data = await response.blob();
    const metadata = {
      type: `image/${pictureType}`,
    };

    const fileReader = new FileReader();
    fileReader.readAsDataURL(new File([data], pictureName, metadata));
    fileReader.onloadend = () => {
      resolve({ imageBinary: fileReader.result, pictureName: pictureName });
    };
  });
  return result;
};
