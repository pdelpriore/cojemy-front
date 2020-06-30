import { resizePictureFile } from "./resizePictureFile";

export const adjustImage = (picture) => {
  return new Promise((resolve) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(picture[0]);

      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = async () => {
          let imageRealWidth = image.width;
          let imageRealHeight = image.height;
          let chosenWidth = image.width;
          let chosenHeight = image.height;

          let dataImage = {
            imageSize: new Buffer.from(
              reader.result.replace(/^data:image\/\w+;base64,/, ""),
              "base64"
            ).byteLength,
            imageBinary: "",
          };

          while (dataImage.imageSize >= 100000) {
            let { imageSize, imageBinary } = await resizePictureFile(
              picture[0],
              imageRealWidth,
              imageRealHeight,
              chosenHeight,
              chosenWidth
            );
            dataImage = {
              ...dataImage,
              imageSize: imageSize,
              imageBinary: imageBinary,
            };
            if (imageRealWidth > 0 && imageRealWidth <= 1200) {
              chosenWidth -= 40;
              chosenHeight -= 40;
            } else if (imageRealWidth > 1200 && imageRealWidth <= 2000) {
              chosenWidth -= 80;
              chosenHeight -= 80;
            } else if (imageRealWidth > 2000 && imageRealWidth <= 2600) {
              chosenWidth -= 120;
              chosenHeight -= 120;
            } else if (imageRealWidth > 2600 && imageRealWidth <= 3200) {
              chosenWidth -= 150;
              chosenHeight -= 150;
            } else {
              chosenWidth -= 350;
              chosenHeight -= 350;
            }
          }
          if (dataImage.imageSize <= 100000) resolve(dataImage.imageBinary);
        };
      };
    } catch (err) {
      if (err) throw new Error(err);
    }
  });
};
