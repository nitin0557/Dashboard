import { combineReducers } from "redux";
import { loginReducer } from "./productReducer";

export default combineReducers({
  login: loginReducer,
});
