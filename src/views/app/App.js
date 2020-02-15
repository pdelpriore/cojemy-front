import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { strings } from "../../strings/Strings";
import Home from "../../components/home/Home";

//Switch will be used for app navigation when user logged

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={strings.path.HOME} exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
