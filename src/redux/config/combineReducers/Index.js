import { combineReducers } from "redux";
import signupReducer from "../../signup/reducer/SignupReducer";
import customerContactReducer from "../../customerContact/reducer/customerContactReducer";
import showRemindPassReducer from "../../showRemindPass/reducer/showRemindPassReducer";
import remindPasswordReducer from "../../remindPassword/reducer/remindPasswordReducer";
import loginReducer from "../../login/reducer/loginReducer";
import logoutReducer from "../../logout/reducer/logoutReducer";
import googleSignupReducer from "../../googleSignup/reducer/googleSignupReducer";
import retrieveRecipesReducer from "../../recipeBook/retrieveRecipe/reducer/retrieveRecipesReducer";
import showRecipeDetailsReducer from "../../recipeBook/showRecipeDetails/reducer/showRecipeDetailsReducer";
import recipeCategorySelectedReducer from "../../recipeBook/recipeCategorySelected/reducer/recipeCategorySelectedReducer";
import toEditRecipeRateCommentReducer from "../../recipeBook/toEditRecipeRateComment/reducer/toEditRateCommentReducer";
import hideRateCommentFormReducer from "../../recipeBook/hideRateCommentForm/reducer/hideRateCommentFormReducer";
import addRateCommentReducer from "../../recipeBook/addRateComment/reducer/addRateCommentReducer";
import turnOffRecipeButtonsReducer from "../../recipeBook/turnOffRecipeButtons/reducer/turnOffRecipeButtonsReducer";
import recipeButtonTurnedOnReducer from "../../recipeBook/recipeButtonTurnedOn/reducer/recipeButtonTurnedOnReducer";
import retrieveMyRecipesReducer from "../../myRecipes/retrieveMyRecipes/reducer/retrieveMyRecipesReducer";
import showNewRecipeFormReducer from "../../myRecipes/showNewRecipeForm/reducer/showNewRecipeFormReducer";
import addNewRecipeReducer from "../../myRecipes/addMyRecipe/reducer/addNewRecipeReducer";
import myRecipeErrorReducer from "../../myRecipes/myRecipeError/reducer/myRecipeErrorReducer";
import toEditMyRecipeReducer from "../../myRecipes/toEditMyRecipe/reducer/toEditMyRecipeReducer";

const allReducers = combineReducers({
  signup: signupReducer,
  customerContact: customerContactReducer,
  showRemindPass: showRemindPassReducer,
  remindPass: remindPasswordReducer,
  login: loginReducer,
  logout: logoutReducer,
  signGoogle: googleSignupReducer,
  recipeBook: retrieveRecipesReducer,
  showRecipeDetails: showRecipeDetailsReducer,
  recipeCategorySelected: recipeCategorySelectedReducer,
  toEditRateComment: toEditRecipeRateCommentReducer,
  hideRateCommentForm: hideRateCommentFormReducer,
  addRateComment: addRateCommentReducer,
  turnOffRecipeButtons: turnOffRecipeButtonsReducer,
  recipeButtonTurnedOn: recipeButtonTurnedOnReducer,
  myRecipes: retrieveMyRecipesReducer,
  newRecipeFormShow: showNewRecipeFormReducer,
  addNewRecipe: addNewRecipeReducer,
  myRecipeError: myRecipeErrorReducer,
  toEditMyRecipe: toEditMyRecipeReducer,
});

export default allReducers;
