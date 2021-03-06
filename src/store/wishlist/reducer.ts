import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { VolumeInfo } from "../search/models";
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
    initWishlist: (state, action: PayloadAction<Array<WishlistBook>>) => {
      state.wishlist = action.payload;
    },
    toggleWishlistElement: (
      state,
      action: PayloadAction<{ id: string; bookData?: VolumeInfo }>
    ) => {
      const { id, bookData } = action.payload;
      const currentWishlist = [...current(state).wishlist];
      if (bookData) {
        currentWishlist.push({ id, info: bookData });
      } else {
        const bookIndex = currentWishlist.findIndex((book) => book.id === id);
        currentWishlist.splice(bookIndex, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(currentWishlist));
      state.wishlist = currentWishlist;
    },
  },
});

export const { toggleWishlistElement, initWishlist } = slice.actions;

export const wishlistReducer = slice.reducer;
