import { RootState } from "../index";

export const getWishlist = (state: RootState) => {
  return state.wishlist.wishlist;
};
