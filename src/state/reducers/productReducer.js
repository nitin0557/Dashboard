// import { Cart } from "../../container/Cart";
import {

  LOGIN,
  LOGOUT,
  
} from "../../state/Constants";




export const loginReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true };
    case LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};
