import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { strings } from "../../strings/Strings";
import Home from "../../components/home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./app.css";

//Switch will be used for app navigation when user logged

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={strings.path.HOME} exact component={Home} />
          <Route path={strings.path.LOGIN} exact component={Login} />
          <Route path={strings.path.SIGNUP} exact component={Signup} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
