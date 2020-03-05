import { combineReducers } from "redux";
import signupReducer from "../../signup/reducer/SignupReducer";
import customerContactReducer from "../../customerContact/reducer/customerContactReducer";
import showRemindPassReducer from "../../showRemindPass/reducer/showRemindPassReducer";
import remindPasswordReducer from "../../remindPassword/reducer/remindPasswordReducer";
import loginReducer from "../../login/reducer/loginReducer";
import logoutReducer from "../../logout/reducer/logoutReducer";

const allReducers = combineReducers({
  signup: signupReducer,
  customerContact: customerContactReducer,
  showRemindPass: showRemindPassReducer,
  remindPass: remindPasswordReducer,
  login: loginReducer,
  logout: logoutReducer
});

export default allReducers;
