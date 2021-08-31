import styled from "styled-components";

export const WishlistContainer = styled.div`
  display: grid;
  row-gap: 1.5rem;
  overflow: auto;
  max-height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
