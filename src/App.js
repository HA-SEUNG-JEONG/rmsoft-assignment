import { styled } from "styled-components";
import CenteredComponent from "./components/CenteredComponent";
import { GridStyle } from "./style/gridStyle";
import FirstSquare from "./components/FirstSquare";
import SecondSquare from "./components/SecondSquare";
import ThirdSquare from "./components/ThirdSquare";
import FourthSquare from "./components/FourthSquare";

import "./style/App.css";

const App = () => {
  return (
    <>
      <Wrapper>
        <CenteredComponent />
        <GridStyle>
          <FirstSquare />
        </GridStyle>
        <GridStyle>
          <SecondSquare />
        </GridStyle>
      </Wrapper>
      <Wrapper>
        <GridStyle>
          <ThirdSquare />
        </GridStyle>
        <GridStyle>
          <FourthSquare />
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
