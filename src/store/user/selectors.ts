import { RootState } from "../index";

export const getUserName = (state: RootState) => {
  return state.user.userName;
};
