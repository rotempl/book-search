import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistElement } from "../../store/wishlist/reducer";
import { getWishlist } from "../../store/wishlist/selectors";
import BookCard from "../common/BookCard";
import { WishlistContainer } from "./wishlistPageStyle";

const WishlistPage: FC = () => {
  const wishlist = useSelector(getWishlist);

  const dispatch = useDispatch();

  const onToggleBookFromList = (id: string) => {
    dispatch(toggleWishlistElement({ id }));
  };

  return (
    <WishlistContainer>
      {wishlist.map((book) => (
        <BookCard
          key={book.id}
          bookInfo={book.info}
          id={book.id}
          isInWishlist
          onToggleWishlist={onToggleBookFromList}
        />
      ))}
    </WishlistContainer>
  );
};

export default WishlistPage;
