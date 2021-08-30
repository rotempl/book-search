import styled from "styled-components";
import { colors } from "../../style/globalVariables";
import { headerHeight } from "../../utils/variables";

export const SearchPageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 9fr 1fr;
  height: calc(100vh - ${headerHeight});
`;

export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    li {
      padding: 0.3rem 0.5rem;
      cursor: pointer;
    }
    .previous,
    .next {
      font-weight: 500;
    }
  }
  .break-me {
    cursor: default;
  }
  .active {
    background-color: ${colors.white};
    color: ${colors.blue};
    border-radius: 50%;
    font-weight: bold;
  }
`;
