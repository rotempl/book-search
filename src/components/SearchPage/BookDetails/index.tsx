import React, { FC, useCallback, useEffect, useState } from "react";
import { VolumeInfo } from "../../../store/search/models";
import { getBookDetails } from "../../../store/search/service";
import { AnyObject } from "../../../utils/variables";
import CommonLoader from "../../common/CommonLoader";
import GenericButton from "../../common/GenericButton";
import Image from "../../common/Image";
import {
  BookDetailsBody,
  BookDetailsContainer,
  BookDetailsSection,
  ButtonsContainer,
  KeyStyle,
} from "./bookDetailsStyle";
import { infoSections, renderByType, saleInfoSections } from "./utils";

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

  const renderBookSection = (key: string, value?: string | Array<string> | boolean | number) => {
    if (value) {
      return (
        <BookDetailsSection key={key}>
          <KeyStyle>{key}:</KeyStyle>
          <div>{renderByType(value)}</div>
        </BookDetailsSection>
      );
    }
    return null;
  };

  return (
    <BookDetailsContainer>
      <BookDetailsBody>
        <Image
          src={bookDetails?.volumeInfo?.imageLinks?.thumbnail}
          alt='book image'
          height={"30rem"}
          width={"20rem"}
        />
        <div>
          <div>
            {Object.entries(infoSections).map(([key, value]) =>
              renderBookSection(key, bookDetails?.volumeInfo?.[value])
            )}
          </div>
          <div>
            {Object.entries(saleInfoSections).map(([key, value]) =>
              renderBookSection(key, bookDetails?.saleInfo?.[value])
            )}
          </div>
        </div>
      </BookDetailsBody>
      <ButtonsContainer>
        <GenericButton text='cancel' onClick={closeModal} />
        <GenericButton text={favoriteButtonText} onClick={onClickToggleWishlist} />
      </ButtonsContainer>
    </BookDetailsContainer>
  );
};

export default BookDetails;
