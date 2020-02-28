import { combineReducers } from "redux";
import signupReducer from "../../signup/reducer/SignupReducer";
import customerContactReducer from "../../customerContact/reducer/customerContactReducer";

const allReducers = combineReducers({
  signup: signupReducer,
  customerContact: customerContactReducer
});

export default allReducers;
