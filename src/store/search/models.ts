interface AccessInfo {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: { isAvailable: boolean };
  pdf: { isAvailable: boolean };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
}

interface SaleInfo {
  country: string;
  isEbook: boolean;
  saleability: string;
}

export interface VolumeInfo {
  allowAnonLogging: boolean;
  authors: Array<string>;
  canonicalVolumeLink: string;
  categories: Array<string>;
  contentVersion: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  smallThumbnail: string;
  thumbnail: string;
  industryIdentifiers: [{ type: string; identifier: string }];
  infoLink: string;
  language: string;
  maturityRating: string;
  panelizationSummary: { containsEpubBubbles: boolean; containsImageBubbles: boolean };
  previewLink: string;
  printType: string;
  publishedDate: string;
  readingModes: { text: boolean; image: boolean };
  title: string;
}
export interface BookData {
  accessInfo: AccessInfo;
  etag: string;
  id: string;
  kind: string;
  saleInfo: SaleInfo;
  selfLink: string;
  volumeInfo: VolumeInfo;
}
