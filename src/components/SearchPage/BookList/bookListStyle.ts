import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1rem;
  row-gap: 1.5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
