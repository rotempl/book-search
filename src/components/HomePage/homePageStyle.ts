import styled from "styled-components";
import { colors } from "../../style/globalVariables";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: grid;
  padding: 4rem 7rem;
  grid-row-gap: 2rem;
  border: 1px solid;
  border-radius: 0.6rem;
  margin: 5rem 0;
`;

export const ErrorMessage = styled.div`
  color: ${colors.error};
  font-size: 16px;
  font-weight: 600;
`;
