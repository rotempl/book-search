import styled from "styled-components";
import { colors } from "../../../style/globalVariables";

export const BookDetailsSection = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;

export const BookDetailsContainer = styled.div`
  color: ${colors.text};
`;

export const KeyStyle = styled.div`
  font-weight: 600;
  margin-inline-end: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  grid-auto-columns: 26rem;
  justify-content: center;
  margin-top: 7rem;
`;

export const BookDetailsBody = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr;
`;
