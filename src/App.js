import FirstGrid from "./components/FirstGrid";
import SecondGrid from "./components/SecondGrid";
import ThirdGrid from "./components/ThirdGrid";
import FourthGrid from "./components/FourthGrid";
import CenteredComponent from "./components/CenteredComponent";
import { GridStyle } from "./style/gridStyle";
import { styled } from "styled-components";

const App = () => {
  return (
    <>
      <Wrapper>
        <CenteredComponent />
        <GridStyle>
          <FirstGrid />
        </GridStyle>
        <GridStyle>
          <SecondGrid />
        </GridStyle>
      </Wrapper>
      <Wrapper>
        <GridStyle>
          <ThirdGrid />
        </GridStyle>
        <GridStyle>
          <FourthGrid />
        </GridStyle>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
