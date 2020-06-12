import createEncryptor from "redux-persist-transform-encrypt";
import { storeKey } from "../../config/Security";

export const encryptor = createEncryptor({
  secretKey: storeKey,
  onError: (err) => console.log(err),
});
