import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookData } from "./models";
import { fetchBooksList } from "./thunks";

interface SearchState {
  searchString: string;
  isLoadingBooksList: boolean;
  bookList: Array<BookData>;
  totalItems: number;
  isError: boolean;
}
const INITIAL_STATE: SearchState = {
  searchString: "",
  isLoadingBooksList: false,
  bookList: [],
  totalItems: 1,
  isError: false,
};

export const slice = createSlice({
  name: "search",
  initialState: INITIAL_STATE,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksList.fulfilled, (state, action) => {
      state.bookList = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.isError = false;
      state.isLoadingBooksList = false;
    });
    builder.addCase(fetchBooksList.pending, (state) => {
      state.isLoadingBooksList = true;
    });
    builder.addCase(fetchBooksList.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { setSearchString } = slice.actions;

export const searchReducer = slice.reducer;
