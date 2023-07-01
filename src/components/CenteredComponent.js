import { styled } from "styled-components";

const CenteredComponent = () => {
  return (
    <Container>
      <ContentWrapper>
        <InnerContainer>
          <Component1></Component1>
          <Component2></Component2>
        </InnerContainer>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.section`
  border: 2px solid black;
  background-color: #40fe00;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 18.75rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div``;

const Component1 = styled.div`
  border: 2px solid black;
  width: 9.3rem;
  height: 9.3rem;
  background-color: red;
  display: flex;
  justify-content: center;
  position: relative;
  top: 5rem;
  right: 50%;
`;

const Component2 = styled.div`
  border: 2px solid black;
  width: 150px;
  height: 150px;
  background-color: white;
`;

export default CenteredComponent;
