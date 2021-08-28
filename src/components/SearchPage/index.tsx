import React, { ChangeEvent, FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setSearchString } from "../../store/search/reducer";
import { getSearchString, getResultPagesCount, getBooksList } from "../../store/search/selectors";
import { fetchBooksList } from "../../store/search/thunks";
import { getUserName } from "../../store/user/selectors";
import Input from "../common/Input";
import { maxPaginationResults } from "../../utils/variables";
import { SearchPageContainer, StyledPaginateContainer } from "./searchPageStyle";
import { AppDispatch } from "../../store";
import BookList from "./BookList";

const SearchPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const userName = useSelector(getUserName);
  const searchString = useSelector(getSearchString);
  const pageCount = useSelector(getResultPagesCount);
  const booksList = useSelector(getBooksList);

  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchString(e.target.value));
      dispatch(fetchBooksList({ searchString: e.target.value, startIndex: 0 }));
    },
    [dispatch]
  );

  const onPageChange = (selected: { selected: number }) => {
    const startIndex = selected.selected * maxPaginationResults;
    dispatch(fetchBooksList({ searchString, startIndex }));
  };

  return (
    <SearchPageContainer>
      <div>Hello {userName}</div>
      <Input value={searchString} onChange={onSearch} placeholder='search for a book' />
      <BookList ListOfBooks={booksList} />
      {booksList.length ? (
        <StyledPaginateContainer>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </StyledPaginateContainer>
      ) : null}
    </SearchPageContainer>
  );
};

export default SearchPage;
