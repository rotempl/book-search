import { instance as axios } from "../../api/http.service";
import { maxPaginationResults } from "../../utils/variables";

export const getBooksList = async (searchString: string, startIndex: number) => {
  try {
    const booksList = await axios.get("", {
      params: { q: searchString, startIndex: startIndex, maxResults: maxPaginationResults },
    });
    return booksList;
  } catch (err) {
    throw err;
  }
};
