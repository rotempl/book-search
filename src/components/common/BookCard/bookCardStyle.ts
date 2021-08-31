import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  border-radius: 0.6rem;
  padding: 1rem;
  justify-content: space-between;
`;

export const BookTitle = styled.div<{ isClickable?: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  text-decoration: ${({ isClickable }) => (isClickable ? "underline" : "auto")};
`;

export const BookData = styled.div<{ isClickable?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  align-items: flex-end;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "regular")};
  grid-column-gap: 1rem;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
