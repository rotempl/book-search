import styled from "styled-components";
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
`;

export const NavigationButton = styled.button<{ isActive: boolean }>`
  font-size: 18px;
  background: none;
  font-weight: bold;
  margin: 0 1rem;
  background-color: ${({ isActive }) => (isActive ? "green" : "none")};
`;
