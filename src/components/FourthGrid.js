import { styled } from "styled-components";

const FourthGrid = () => {
  return (
    <section>
      <StyledFourthGrid></StyledFourthGrid>
    </section>
  );
};

const StyledFourthGrid = styled.section`
  width: 300px;
  height: 300px;
  background-color: #fffe00;
  display: block;
`;

export default FourthGrid;
