
import { LOGIN, LOGOUT } from "../../state/Constants";

export const login = () => {
  return {
    type: LOGIN,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
