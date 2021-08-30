import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";
import { setSearchString } from "../../store/search/reducer";
import { getSearchString, getResultPagesCount, getBooksList } from "../../store/search/selectors";
import { fetchBooksList } from "../../store/search/thunks";
import Input from "../common/Input";
import { maxPaginationResults } from "../../utils/variables";
import { SearchPageContainer, StyledPaginateContainer } from "./searchPageStyle";
import { AppDispatch } from "../../store";
import BookList from "./BookList";
import useModal from "../../Hooks/useModal";
import BookDetails from "./BookDetails";
import { WishlistBook } from "../../store/wishlist/models";
import { getWishlist } from "../../store/wishlist/selectors";
import { toggleWishlistElement } from "../../store/wishlist/reducer";

const SearchPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [presentedBookId, setPresentedBookId] = useState("");

  const searchString = useSelector(getSearchString);
  const pageCount = useSelector(getResultPagesCount);
  const booksList = useSelector(getBooksList);
  const wishlist = useSelector(getWishlist);

  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchString(e.target.value));
      dispatch(fetchBooksList({ searchString: e.target.value, startIndex: 0 }));
    },
    [dispatch]
  );

  const { isModalOpen, closeModal, openModal } = useModal();

  const onPageChange = (selected: { selected: number }) => {
    const startIndex = selected.selected * maxPaginationResults;
    dispatch(fetchBooksList({ searchString, startIndex }));
  };

  const onBookCardClick = (id: string) => {
    setPresentedBookId(id);
    openModal();
  };

  const onToggleWishlist = (bookData: WishlistBook, toAdd: boolean) => {
    dispatch(toggleWishlistElement({ bookData, toAdd }));
  };

  return (
    <SearchPageContainer>
      <Input value={searchString} onChange={onSearch} placeholder='search for a book' />
      <BookList
        ListOfBooks={booksList}
        onBookCardClick={onBookCardClick}
        onToggleWishlist={onToggleWishlist}
        wishlist={wishlist}
      />
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
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='Example Modal'>
        <BookDetails presentedBookId={presentedBookId} closeModal={closeModal} isInWishlist />
      </Modal>
    </SearchPageContainer>
  );
};

export default SearchPage;
