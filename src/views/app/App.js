import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { strings } from "../../strings/Strings";
import Home from "../../components/home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import RecipeBook from "../recipeBook/RecipeBook";
import MyRecipes from "../myRecipes/MyRecipes";
import Mails from "../mails/Mails";
import MyEvents from "../myEvents/MyEvents";
import MyProfile from "../myProfile/MyProfile";
import { useSelector } from "react-redux";
import "./app.css";

const App = () => {
  let { userData } = useSelector((state) => state.login);
  let { profileUpdated } = useSelector((state) => state.updateMyProfile);

  return (
    <>
      <Router>
        <Switch>
          {userData.email !== undefined && (
            <Route path={strings.path.HOME} exact component={Home} />
          ) ? (
            <Redirect
              from={strings.path.HOME}
              to={strings.path.RECIPE_BOOK}
              exact
            />
          ) : (
            <Route path={strings.path.HOME} exact component={Home} />
          )}
          {userData.email !== undefined && (
            <Route path={strings.path.LOGIN} exact component={Login} />
          ) ? (
            <Redirect
              from={strings.path.LOGIN}
              to={strings.path.RECIPE_BOOK}
              exact
            />
          ) : (
            <Route path={strings.path.LOGIN} exact component={Login} />
          )}
          {userData.email !== undefined && (
            <Route path={strings.path.SIGNUP} exact component={Signup} />
          ) ? (
            <Redirect
              from={strings.path.SIGNUP}
              to={strings.path.RECIPE_BOOK}
            />
          ) : (
            <Route path={strings.path.SIGNUP} exact component={Signup} />
          )}
          {userData.email !== undefined ? (
            <Route
              path={strings.path.RECIPE_BOOK}
              exact
              component={RecipeBook}
            />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userData.email !== undefined ? (
            <Route path={strings.path.MY_RECIPES} exact component={MyRecipes} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userData.email !== undefined ? (
            <Route path={strings.path.MAILS} exact component={Mails} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userData.email !== undefined ? (
            <Route path={strings.path.MY_EVENTS} exact component={MyEvents} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userData.email !== undefined ? (
            <Route path={strings.path.MY_PROFILE} exact component={MyProfile} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
