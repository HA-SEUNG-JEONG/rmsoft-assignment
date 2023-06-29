import { styled } from "styled-components";

const FourthGrid = () => {
  return (
    <section>
      <StyledFourthGrid></StyledFourthGrid>
    </section>
  );
};

const StyledFourthGrid = styled.section`
  border: 1px solid black;
  width: 300px;
  height: 300px;
  background-color: #fffe00;
  display: block;
`;

export default FourthGrid;
