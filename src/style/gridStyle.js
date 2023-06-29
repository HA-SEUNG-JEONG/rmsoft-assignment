import { styled } from "styled-components";

export const GridStyle = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 75px);
  grid-template-rows: repeat(2, 75px);
  gap: 75px;
`;
