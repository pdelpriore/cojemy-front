import { combineReducers } from "redux";
import signupReducer from "../../signup/reducer/SignupReducer";

const allReducers = combineReducers({
  signup: signupReducer
});

export default allReducers;
