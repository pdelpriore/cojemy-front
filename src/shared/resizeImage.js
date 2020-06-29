import { resizePictureFile } from "./resizePictureFile";

export const resizeImage = (picture) => {
  return new Promise((resolve) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(picture[0]);

      reader.onload = () => {
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

          const response = await fetch(reader.result);
          const data = await response.blob();
          //wydobyc file name i rozszerzenie pliku
          console.log(picture[0]);
          const metadata = {
            type: `image/jpeg`,
          };

          const imageToResize = new File([data], "test", metadata);

          let count = 0;

          while (dataImage.imageSize >= 100000) {
            let { imageSize, imageBinary } = await resizePictureFile(
              imageToResize,
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
            chosenWidth -= 40;
            chosenHeight -= 40;
            count++;
          }
          if (dataImage.imageSize <= 100000) {
            console.log("done !");
            console.log(
              new Buffer.from(
                dataImage.imageBinary.replace(/^data:image\/\w+;base64,/, ""),
                "base64"
              ).byteLength
            );
            console.log(count);
          }
        };
      };
    } catch (err) {
      if (err) throw new Error(err);
    }
  });
};
