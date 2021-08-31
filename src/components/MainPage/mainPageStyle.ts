import styled from "styled-components";
import { headerHeight } from "../../utils/variables";

export const AppBody = styled.div`
  height: calc(100vh - ${headerHeight});
  padding: 1rem 5rem;
`;
