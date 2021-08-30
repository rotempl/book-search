import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooksList } from "./service";

export const fetchBooksList = createAsyncThunk(
  "search/fetchBooksList",
  async (payload: { searchString: string; startIndex: number }) => {
    const { searchString, startIndex } = payload;
    try {
      if (searchString) {
        const { data } = await getBooksList(searchString, startIndex);
        return data;
      }
      return { items: [], totalItems: 0 };
    } catch (e) {
      console.log(e);
    }
  }
);
