import React, { FC } from "react";
import { VolumeInfo } from "../../../store/search/models";
import { BookData, BookTitle, CardContainer, FlexDiv } from "./bookCardStyle";
import Image from "../../common/Image";
import GenericButton from "../GenericButton";

interface BookCardProps {
  id: string;
  bookInfo: VolumeInfo;
  isInWishlist: boolean;
  onBookCardClick?: (id: string) => void;
  onToggleWishlist: (id: string, bookData?: VolumeInfo) => void;
}

const BookCard: FC<BookCardProps> = (props) => {
  const { id, bookInfo, isInWishlist, onBookCardClick, onToggleWishlist } = props;

  const onBookClick = () => {
    onBookCardClick && onBookCardClick(id);
  };

  const onClickWishlistButton = () => {
    const bookData = isInWishlist ? undefined : bookInfo;
    onToggleWishlist(id, bookData);
  };

  return (
    <CardContainer>
      <BookData onClick={onBookClick} isClickable={!!onBookCardClick}>
        <Image
          src={bookInfo.imageLinks?.thumbnail}
          alt={bookInfo.title}
          height={"8rem"}
          width={"6rem"}
        />
        <BookTitle isClickable={!!onBookCardClick}>{bookInfo.title}</BookTitle>
        <FlexDiv>
          <div>{bookInfo.authors?.join(", ")}</div>
          <div>{bookInfo.publishedDate}</div>
        </FlexDiv>
      </BookData>
      <GenericButton
        text={isInWishlist ? "remove from wishlist" : "add to wishlist"}
        onClick={onClickWishlistButton}
      />
    </CardContainer>
  );
};

export default BookCard;
