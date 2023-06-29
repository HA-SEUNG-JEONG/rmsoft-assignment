import FirstGrid from "./components/FirstGrid";
import SecondGrid from "./components/SecondGrid";
import ThirdGrid from "./components/ThirdGrid";
import FourthGrid from "./components/FourthGrid";
import CenteredComponent from "./components/CenteredComponent";
import { GridStyle } from "./style/gridStyle";

const App = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CenteredComponent />
        <GridStyle>
          <FirstGrid />
        </GridStyle>
        <GridStyle>
          <SecondGrid />
        </GridStyle>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <GridStyle>
          <ThirdGrid />
        </GridStyle>
        <GridStyle>
          <FourthGrid />
        </GridStyle>
      </section>
    </>
  );
};

export default App;
