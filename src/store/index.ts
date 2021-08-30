import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/reducer";
import { userReducer } from "./user/reducer";
import { wishlistReducer } from "./wishlist/reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
