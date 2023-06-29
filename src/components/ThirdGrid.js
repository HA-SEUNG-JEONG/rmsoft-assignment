import { styled } from "styled-components";

const ThirdGrid = () => {
  return (
    <Wrapper>
      <Content></Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  border: 1px solid black;
  z-index: 1;
`;

export default ThirdGrid;
