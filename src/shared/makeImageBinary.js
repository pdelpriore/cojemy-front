import Compress from "compress.js";
import { strings } from "../strings/Strings";
import { unacceptableWordsArray } from "../shared/testWordsArray";
import { capitalizeFirst } from "../util/Util";

export const makeImageBinary = (picture) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (picture.length > 1) {
        picture = picture.splice(picture.length - 1, 1);
      }
      if (
        unacceptableWordsArray.some(
          (element) => picture.length > 0 && picture[0].name.includes(element)
        )
      ) {
        reject(capitalizeFirst(strings.myRecipes.error.IMAGE_UNACCEPTABLE));
      } else if (picture.length > 0 && picture[0].size > 9000000) {
        reject(capitalizeFirst(strings.myRecipes.error.IMAGE_SIZE_ERROR));
      }

      if (
        picture.length > 0 &&
        picture[0].size > 100000 &&
        picture[0].size <= 9000000
      ) {
        const compress = new Compress();
        const result = await compress.compress([picture[0]], {
          size: 0.1,
          quality: 1,
          resize: true,
        });
        resolve({
          image: result[0].prefix + result[0].data,
          imageName: picture.length > 0 && picture[0].name,
        });
      } else {
        const fileReader = new FileReader();
        picture.length > 0 && fileReader.readAsDataURL(picture[0]);
        fileReader.onloadend = () => {
          resolve({
            image: fileReader.result,
            imageName: picture.length > 0 && picture[0].name,
          });
        };
      }
    } catch (err) {
      if (err) throw new Error(err);
    }
  });
};
