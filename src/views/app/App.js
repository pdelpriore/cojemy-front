import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import StartPage from "../../components/startPage/StartPage";

//Switch will be used for app navigation when user logged

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={StartPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
