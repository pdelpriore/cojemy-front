import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/config/Persistor";
import "./index.css";
import App from "./views/app/App";

const { myStore, persistor } = configureStore();

ReactDOM.render(
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
