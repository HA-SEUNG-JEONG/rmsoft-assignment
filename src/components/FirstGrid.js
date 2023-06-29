import { styled } from "styled-components";

const FirstGrid = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <StyledFirstGrid key={i}></StyledFirstGrid>
      ))}
    </>
  );
};

const StyledFirstGrid = styled.section`
  border: 1px solid black;
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  display: grid;
  font-size: 24px;
  &:nth-child(2),
  &:nth-child(3) {
    background-color: #f91aff;
  }
`;

export default FirstGrid;
