import { strings } from "../strings/Strings";
import { capitalizeFirst } from "../util/Util";

export const makeImageBinary = async (picture) => {
  const result = await new Promise((resolve, reject) => {
    if (picture.length > 1) {
      picture = picture.splice(picture.length - 1, 1);
    }
    if (
      [
        "xxx",
        "porn",
        "teen",
        "milf",
        "tits",
        "pussy",
        "cock",
        "sex",
        "penis",
        "cum",
        "sperme",
        "baise",
        "enculé",
        "deepthroat",
        "anal",
        "sodomie",
        "bite",
      ].some(
        (element) => picture.length > 0 && picture[0].name.includes(element)
      )
    ) {
      reject(capitalizeFirst(strings.myRecipes.error.IMAGE_UNACCEPTABLE));
    } else if (picture.length > 0 && picture[0].size > 100000) {
      reject(capitalizeFirst(strings.myRecipes.error.IMAGE_SIZE_ERROR));
    }

    const fileReader = new FileReader();
    picture.length > 0 && fileReader.readAsDataURL(picture[0]);
    fileReader.onloadend = () => {
      resolve({
        image: fileReader.result,
        imageName: picture.length > 0 && picture[0].name,
      });
    };
  });
  return result;
};
