import React, { FC } from "react";
import { BookData } from "../../../store/search/models";
import BookCard from "../../common/BookCard";
import { ListContainer } from "./bookListStyle";

interface BookListProps {
  ListOfBooks: Array<BookData>;
  onBookCardClick: (id: string) => void;
}

const BookList: FC<BookListProps> = (props) => {
  const { ListOfBooks, onBookCardClick } = props;
  return (
    <ListContainer>
      {ListOfBooks.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          bookInfo={book.volumeInfo}
          isInWishlist
          onBookCardClick={onBookCardClick}
        />
      ))}
    </ListContainer>
  );
};

export default BookList;
