import React, { FC, useCallback, useEffect, useState } from "react";
import { VolumeInfo } from "../../../store/search/models";
import { getBookDetails } from "../../../store/search/service";
import { AnyObject } from "../../../utils/variables";
import CommonLoader from "../../common/CommonLoader";
import GenericButton from "../../common/GenericButton";

interface BookDetailsProps {
  presentedBookId: string;
  closeModal: () => void;
  isInWishlist: boolean;
  onToggleWishlist: (id: string, bookData?: VolumeInfo) => void;
}

const BookDetails: FC<BookDetailsProps> = (props) => {
  const { presentedBookId, closeModal, isInWishlist, onToggleWishlist } = props;

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

  const onClickToggleWishlist = () => {
    const bookData = isInWishlist ? undefined : bookDetails.volumeInfo;
    onToggleWishlist(presentedBookId, bookData);
  };

  if (isLoading) {
    return <CommonLoader />;
  }

  return (
    <div style={{ color: "green" }}>
      <div>I'm book details</div>
      <div>{bookDetails?.volumeInfo?.title}</div>
      <div>
        <GenericButton text='cancel' onClick={closeModal} />
        <GenericButton text={favoriteButtonText} onClick={onClickToggleWishlist} />
      </div>
    </div>
  );
};

export default BookDetails;
