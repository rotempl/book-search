import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";
import { setSearchString } from "../../store/search/reducer";
import {
  getSearchString,
  getResultPagesCount,
  getBooksList,
  isLoadingBooksList as isLoadingBooksListSelector,
} from "../../store/search/selectors";
import { fetchBooksList } from "../../store/search/thunks";
import Input from "../common/Input";
import { maxPaginationResults } from "../../utils/variables";
import { SearchPageContainer, StyledPaginateContainer } from "./searchPageStyle";
import { AppDispatch } from "../../store";
import BookList from "./BookList";
import useModal from "../../Hooks/useModal";
import BookDetails from "./BookDetails";
import { getWishlist } from "../../store/wishlist/selectors";
import { toggleWishlistElement } from "../../store/wishlist/reducer";
import CommonLoader from "../common/CommonLoader";
import { VolumeInfo } from "../../store/search/models";

const SearchPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [presentedBookId, setPresentedBookId] = useState("");

  const searchString = useSelector(getSearchString);
  const pageCount = useSelector(getResultPagesCount);
  const booksList = useSelector(getBooksList);
  const isLoadingBooksList = useSelector(isLoadingBooksListSelector);
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

  const onToggleWishlist = (id: string, bookData?: VolumeInfo) => {
    dispatch(toggleWishlistElement({ id, bookData }));
  };

  const isBookInWishlist = useCallback(
    (id: string) => {
      return !!wishlist.find((wishlistBook) => wishlistBook.id === id);
    },
    [wishlist]
  );

  return (
    <SearchPageContainer>
      <Input value={searchString} onChange={onSearch} placeholder='search for a book' />
      {isLoadingBooksList ? (
        <CommonLoader />
      ) : (
        <BookList
          ListOfBooks={booksList}
          onBookCardClick={onBookCardClick}
          onToggleWishlist={onToggleWishlist}
          wishlist={wishlist}
        />
      )}
      {booksList?.length ? (
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{ content: { inset: "200px" } }}
      >
        <BookDetails
          presentedBookId={presentedBookId}
          closeModal={closeModal}
          isInWishlist={isBookInWishlist(presentedBookId)}
          onToggleWishlist={onToggleWishlist}
        />
      </Modal>
    </SearchPageContainer>
  );
};

export default SearchPage;
