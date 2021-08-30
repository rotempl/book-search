import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { WishlistBook } from "./models";

interface WishlistState {
  wishlist: Array<WishlistBook>;
}
const INITIAL_STATE: WishlistState = {
  wishlist: [],
};

export const slice = createSlice({
  name: "wishlist",
  initialState: INITIAL_STATE,
  reducers: {
    toggleWishlistElement: (
      state,
      action: PayloadAction<{ bookData: WishlistBook; toAdd: boolean }>
    ) => {
      const { bookData, toAdd } = action.payload;
      const currentWishlist = [...current(state).wishlist];
      if (toAdd) {
        currentWishlist.push(bookData);
      } else {
        const bookIndex = currentWishlist.findIndex((book) => book.id === bookData.id);
        currentWishlist.splice(bookIndex, 1);
      }
      state.wishlist = currentWishlist;
    },
  },
});

export const { toggleWishlistElement } = slice.actions;

export const wishlistReducer = slice.reducer;
