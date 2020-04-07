import { combineReducers } from "redux";
import signupReducer from "../../signup/reducer/SignupReducer";
import customerContactReducer from "../../customerContact/reducer/customerContactReducer";
import showRemindPassReducer from "../../showRemindPass/reducer/showRemindPassReducer";
import remindPasswordReducer from "../../remindPassword/reducer/remindPasswordReducer";
import loginReducer from "../../login/reducer/loginReducer";
import logoutReducer from "../../logout/reducer/logoutReducer";
import googleSignupReducer from "../../googleSignup/reducer/googleSignupReducer";
import googleLoginReducer from "../../googleLogin/reducer/googleLoginReducer";
import googleLogoutReducer from "../../googleLogout/reducer/googleLogoutReducer";
import retrieveRecipesReducer from "../../recipeBook/retrieveRecipe/reducer/retrieveRecipesReducer";
import showRecipeDetailsReducer from "../../recipeBook/showRecipeDetails/reducer/showRecipeDetailsReducer";
import recipeCategorySelectedReducer from "../../recipeBook/recipeCategorySelected/reducer/recipeCategorySelectedReducer";
import toEditRecipeRateCommentReducer from "../../recipeBook/toEditRecipeRateComment/reducer/toEditRateCommentReducer";
import hideRateCommentFormReducer from "../../recipeBook/hideRateCommentForm/reducer/hideRateCommentFormReducer";
import editRateCommentFormReducer from "../../recipeBook/editRateCommentForm/reducer/editRateCommentFormReducer";
import addRateCommentReducer from "../../addRateComment/reducer/addRateCommentReducer";
import removeRateCommentReducer from "../../recipeBook/removeRateComment/reducer/removeRateCommentReducer";
import turnOffRecipeButtonsReducer from "../../recipeBook/turnOffRecipeButtons/reducer/turnOffRecipeButtonsReducer";

const allReducers = combineReducers({
  signup: signupReducer,
  customerContact: customerContactReducer,
  showRemindPass: showRemindPassReducer,
  remindPass: remindPasswordReducer,
  login: loginReducer,
  logout: logoutReducer,
  signGoogle: googleSignupReducer,
  loginGoogle: googleLoginReducer,
  googleLogout: googleLogoutReducer,
  recipeBook: retrieveRecipesReducer,
  showRecipeDetails: showRecipeDetailsReducer,
  recipeCategorySelected: recipeCategorySelectedReducer,
  toEditRateComment: toEditRecipeRateCommentReducer,
  hideRateCommentForm: hideRateCommentFormReducer,
  editRateCommentForm: editRateCommentFormReducer,
  addRateComment: addRateCommentReducer,
  removeRateComment: removeRateCommentReducer,
  turnOffRecipeButtons: turnOffRecipeButtonsReducer,
});

export default allReducers;
