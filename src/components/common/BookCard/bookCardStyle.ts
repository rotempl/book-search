import styled from "styled-components";
import { SubHeader } from "../../../style/commonStyle";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-radius: 0.6rem;
  padding: 1rem;
`;

export const CardHeader = styled(SubHeader)`
  height: 10rem;
`;
