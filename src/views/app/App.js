import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { strings } from "../../strings/Strings";
import Home from "../../components/home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import RecipeBook from "../recipeBook/RecipeBook";
import MyRecipes from "../myRecipes/MyRecipes";
import Mails from "../mails/Mails";
import MyEvents from "../myEvents/MyEvents";
import MyProfile from "../myProfile/MyProfile";
import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={strings.path.HOME} exact component={Home} />
          <Route path={strings.path.LOGIN} exact component={Login} />
          <Route path={strings.path.SIGNUP} exact component={Signup} />
          <Route path={strings.path.RECIPE_BOOK} exact component={RecipeBook} />
          <Route path={strings.path.MY_RECIPES} exact component={MyRecipes} />
          <Route path={strings.path.MAILS} exact component={Mails} />
          <Route path={strings.path.MY_EVENTS} exact component={MyEvents} />
          <Route path={strings.path.MY_PROFILE} exact component={MyProfile} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
