import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import encryptor from "./Encryptor";
import storage from "redux-persist/lib/storage";
import allReducers from "./combineReducers/Index";
import thunk from "redux-thunk";

const persistConfig = {
  key: "qm",
  storage,
  transforms: [encryptor],
};

const persistedReducers = persistReducer(persistConfig, allReducers);

export default () => {
  let myStore = createStore(persistedReducers, applyMiddleware(thunk));
  let persistor = persistStore(myStore);
  return { myStore, persistor };
};
