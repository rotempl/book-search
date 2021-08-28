import React, { FC } from "react";
import { BookData } from "../../../store/search/models";
import BookCard from "../../common/BookCard";
import { ListContainer } from "./bookListStyle";

interface BookListProps {
  ListOfBooks: Array<BookData>;
}

const BookList: FC<BookListProps> = (props) => {
  const { ListOfBooks } = props;
  return (
    <ListContainer>
      {ListOfBooks.map((book) => (
        <BookCard bookInfo={book.volumeInfo} isInWishlist />
      ))}
    </ListContainer>
  );
};

export default BookList;
