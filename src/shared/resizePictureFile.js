import Resizer from "react-image-file-resizer";

export const resizePictureFile = (
  imageToResize,
  imageRealWidth,
  imageRealHeight,
  chosenHeight,
  chosenWidth
) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      imageToResize,
      (chosenHeight * imageRealWidth) / imageRealHeight,
      (chosenWidth * imageRealHeight) / imageRealWidth,
      imageToResize.type.split("/").slice(1).toString(),
      100,
      0,
      (uri) => {
        resolve({
          imageSize: new Buffer.from(
            uri.replace(/^data:image\/\w+;base64,/, ""),
            "base64"
          ).byteLength,
          imageBinary: uri,
        });
      },
      "base64"
    );
  });
};
