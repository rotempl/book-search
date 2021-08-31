import styled from "styled-components";

export const WishlistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 1rem;
  row-gap: 1.5rem;
  overflow: auto;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
