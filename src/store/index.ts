import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/reducer";
import { userReducer } from "./user/reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
