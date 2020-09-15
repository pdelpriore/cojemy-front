import createEncryptor from "redux-persist-transform-encrypt";

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_STORE_KEY,
  onError: (err) => console.log(err),
});

export default encryptor;
