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
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./app.css";

//Switch will be used for app navigation when user logged

const client = new ApolloClient({
  uri: strings.path.GRAPHQL
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path={strings.path.HOME} exact component={Home} />
            <Route path={strings.path.LOGIN} exact component={Login} />
            <Route path={strings.path.SIGNUP} exact component={Signup} />
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
