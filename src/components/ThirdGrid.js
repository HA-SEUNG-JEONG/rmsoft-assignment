import { styled } from "styled-components";

const ThirdGrid = () => {
  return (
    <Wrapper>
      <Content></Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 300px;
  height: 300px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  border: 2px solid black;
  z-index: 1;
`;

export default ThirdGrid;
