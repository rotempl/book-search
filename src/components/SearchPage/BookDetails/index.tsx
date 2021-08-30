import React, { FC, useCallback, useEffect, useState } from "react";
import { getBookDetails } from "../../../store/search/service";
import { AnyObject } from "../../../utils/variables";
import GenericButton from "../../common/GenericButton";

interface BookDetailsProps {
  presentedBookId: string;
  closeModal: () => void;
  isInWishlist: boolean;
}

const BookDetails: FC<BookDetailsProps> = (props) => {
  const { presentedBookId, closeModal, isInWishlist } = props;

  const [bookDetails, setBookDetails] = useState<AnyObject>({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const bookDetails = await getBookDetails(presentedBookId);
      setBookDetails(bookDetails);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, [presentedBookId]);

  useEffect(() => {
    fetchBookDetails();
  }, [presentedBookId, fetchBookDetails]);

  const favoriteButtonText = isInWishlist ? "Remove from wishlist" : "Add to wishlist";

  const onToggleWishlist = () => {
    console.log("wishlist");
  };

  if (isLoading) {
    return <div>loader</div>;
  }

  return (
    <div style={{ color: "green" }}>
      <div>I'm book details</div>
      <div>{bookDetails?.volumeInfo?.title}</div>
      <div>
        <GenericButton text='cancel' onClick={closeModal} />
        <GenericButton text={favoriteButtonText} onClick={onToggleWishlist} />
      </div>
    </div>
  );
};

export default BookDetails;
