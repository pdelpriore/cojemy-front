import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allReducers from "./combineReducers/Index";
import thunk from "redux-thunk";

const persistConfig = {
  key: "qm",
  storage
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducers = persistReducer(persistConfig, allReducers);

export default () => {
  let myStore = createStore(
    persistedReducers,
    composeEnhancer(applyMiddleware(thunk))
  );
  let persistor = persistStore(myStore);
  return { myStore, persistor };
};
