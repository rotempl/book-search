export const infoSections = {
  title: "title",
  authors: "authors",
  "content version": "contentVersion",
  "preview link": "previewLink",
  "page count": "pageCount",
  "printed Page Count": "printedPageCount",
  publisher: "publisher",
  "published date": "publishedDate",
};

export const saleInfoSections = {
  country: "country",
  "has EbookF": "isEbook",
  saleability: "saleability",
};

export const renderBooleanToString = (value: boolean) => {
  return value ? "true" : false;
};

export const renderArrayOfStrings = (strings: Array<string>, joinWith?: string) => {
  return strings.join(joinWith || ", ");
};

export const renderByType = (value: string | Array<string> | boolean | number) => {
  const typeOfValue = typeof value;
  if (typeOfValue === "boolean") {
    //@ts-expect-error
    renderBooleanToString(value);
  }
  if (typeOfValue === "object") {
    //@ts-expect-error
    renderArrayOfStrings(value);
  }
  return value;
};
