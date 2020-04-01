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
import retrieveRecipesReducer from "../../retrieveRecipe/reducer/retrieveRecipesReducer";
import showRecipeDetailsReducer from "../../showRecipeDetails/reducer/showRecipeDetailsReducer";
import recipeCategorySelectedReducer from "../../recipeCategorySelected/reducer/recipeCategorySelectedReducer";
import toEditRecipeRateCommentReducer from "../../toEditRecipeRateComment/reducer/toEditRateCommentReducer";

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
  toEditRateComment: toEditRecipeRateCommentReducer
});

export default allReducers;
