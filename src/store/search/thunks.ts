import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooksList } from "./service";

export const fetchBooksList = createAsyncThunk(
  "search/fetchBooksList",
  async (payload: { searchString: string; startIndex: number }) => {
    const { searchString, startIndex } = payload;
    const { data } = await getBooksList(searchString, startIndex);
    return data;
  }
);
