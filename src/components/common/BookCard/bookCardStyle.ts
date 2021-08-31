import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  border-radius: 0.6rem;
  padding: 1rem;
  justify-content: space-between;
`;

export const BookData = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: flex-end;
  cursor: pointer;
  grid-column-gap: 1rem;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
