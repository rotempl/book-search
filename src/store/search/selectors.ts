import { maxPaginationResults } from "../../utils/variables";
import { RootState } from "../index";

export const getSearchString = (state: RootState) => {
  return state.search.searchString;
};

export const getResultPagesCount = (state: RootState) => {
  return state.search.totalItems / maxPaginationResults;
};

export const getBooksList = (state: RootState) => {
  return state.search.bookList;
};

export const isLoadingBooksList = (state: RootState) => {
  return state.search.isLoadingBooksList;
};
