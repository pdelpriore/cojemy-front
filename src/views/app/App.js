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
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./app.css";

//Switch will be used for app navigation when user logged

const App = () => {
  return (
    <>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={500} classNames="fade">
                <Switch location={location}>
                  <Route path={strings.path.HOME} exact component={Home} />
                  <Route path={strings.path.LOGIN} exact component={Login} />
                  <Route path={strings.path.SIGNUP} exact component={Signup} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </>
  );
};

export default App;
