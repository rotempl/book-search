import React, { FC, useCallback } from "react";
import { BookData, VolumeInfo } from "../../../store/search/models";
import { WishlistBook } from "../../../store/wishlist/models";
import BookCard from "../../common/BookCard";
import { ListContainer } from "./bookListStyle";

interface BookListProps {
  ListOfBooks: Array<BookData>;
  onBookCardClick: (id: string) => void;
  onToggleWishlist: (id: string, bookData?: VolumeInfo) => void;
  wishlist: Array<WishlistBook>;
}

const BookList: FC<BookListProps> = (props) => {
  const { ListOfBooks, onBookCardClick, onToggleWishlist, wishlist } = props;

  const isBookInWishlist = useCallback(
    (id: string) => {
      return !!wishlist.find((wishlistBook) => wishlistBook.id === id);
    },
    [wishlist]
  );

  return (
    <ListContainer>
      {ListOfBooks?.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          bookInfo={book.volumeInfo}
          isInWishlist={isBookInWishlist(book.id)}
          onBookCardClick={onBookCardClick}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </ListContainer>
  );
};

export default BookList;
