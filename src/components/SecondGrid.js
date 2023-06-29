import { styled } from "styled-components";

const SecondGrid = () => {
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
  width: 150px;
  height: 150px;
  background-color: blue;
  border: 1px solid black;
  position: relative;
  top: 50%;
`;

export default SecondGrid;
