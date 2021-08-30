import React, { FC } from "react";
import { VolumeInfo } from "../../../store/search/models";
import { CardContainer, CardHeader } from "./bookCardStyle";
import Image from "../../common/Image";
import GenericButton from "../GenericButton";
import { WishlistBook } from "../../../store/wishlist/models";

interface BookCardProps {
  id: string;
  bookInfo: VolumeInfo;
  isInWishlist: boolean;
  onBookCardClick?: (id: string) => void;
  onToggleWishlist: (bookData: WishlistBook, toAdd: boolean) => void;
}

const BookCard: FC<BookCardProps> = (props) => {
  const { id, bookInfo, isInWishlist, onBookCardClick, onToggleWishlist } = props;

  const onBookClick = () => {
    onBookCardClick && onBookCardClick(id);
  };

  const onClickWishlistButton = () => {
    onToggleWishlist({ id: id, info: bookInfo }, !isInWishlist);
  };

  return (
    <CardContainer>
      <div onClick={onBookClick}>
        <CardHeader>{bookInfo.title}</CardHeader>
        <Image
          src={bookInfo.imageLinks?.thumbnail}
          alt={bookInfo.title}
          height={"17rem"}
          width={"11rem"}
        />
      </div>
      <GenericButton
        text={isInWishlist ? "remove from wishlist" : "add to wishlist"}
        onClick={onClickWishlistButton}
      />
    </CardContainer>
  );
};

export default BookCard;
