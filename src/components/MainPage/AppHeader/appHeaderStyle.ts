import styled from "styled-components";
import { colors } from "../../../style/globalVariables";
import { headerHeight } from "../../../utils/variables";

export const HeaderContainer = styled.div`
  position: sticky;
  background: #050c31;
  height: ${headerHeight};
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: 2.4rem;
`;

export const NavigationButton = styled.button<{ isActive: boolean }>`
  font-size: 18px;
  background: none;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "regular")};
  margin: 0 1rem;
  background-color: ${({ isActive }) => (isActive ? colors.gray : "none")};
  padding: 1rem 0.5rem;
  border-radius: 5px;
`;
