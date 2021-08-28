import styled from "styled-components";
import { colors } from "../../style/globalVariables";

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