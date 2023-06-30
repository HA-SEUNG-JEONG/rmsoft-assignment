import { styled } from "styled-components";

const SecondSquare = () => {
  return (
    <>
      <section>
        <StyledSecondGrid>
          <Content></Content>
        </StyledSecondGrid>
        <StyledSecondGrid></StyledSecondGrid>
      </section>
    </>
  );
};

const StyledSecondGrid = styled.section`
  border: 2px solid black;
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    background-color: black;
  }
  &:last-child {
    background-color: #3fffff;
  }
`;

const Content = styled.div`
  border: 2px solid black;
  width: 150px;
  height: 150px;
  background-color: blue;
  position: relative;
  top: 50%;
`;

export default SecondSquare;
