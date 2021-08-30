import React, { FC } from "react";
import { VolumeInfo } from "../../../store/search/models";
import { CardContainer, CardHeader } from "./bookCardStyle";
import Image from "../../common/Image";
import GenericButton from "../GenericButton";

interface BookCardProps {
  id: string;
  bookInfo: VolumeInfo;
  isInWishlist: boolean;
  onBookCardClick?: (id: string) => void;
}

const BookCard: FC<BookCardProps> = (props) => {
  const { id, bookInfo, isInWishlist, onBookCardClick } = props;

  const onBookClick = () => {
    onBookCardClick && onBookCardClick(id);
  };

  return (
    <CardContainer onClick={onBookClick}>
      <CardHeader>{bookInfo.title}</CardHeader>
      <Image
        src={bookInfo.imageLinks?.thumbnail}
        alt={bookInfo.title}
        height={"17rem"}
        width={"11rem"}
      />
      <GenericButton text={isInWishlist ? "remove from wishlist" : "add to wishlist"} />
    </CardContainer>
  );
};

export default BookCard;
