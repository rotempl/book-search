import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  background: #050c31;
  height: 7rem;
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
