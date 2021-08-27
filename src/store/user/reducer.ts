import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
}
const INITIAL_STATE: UserState = {
  userName: "",
};

export const slice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setUser } = slice.actions;

export const userReducer = slice.reducer;
