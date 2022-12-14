import ape from "../../assets/ape.png";
import styled from "styled-components";

const Image = () => {
  return (
    <Wrapper>
      <img src={ape} alt="ape" className="ape-img" />
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  @media screen and (min-width: 992px) {
    justify-content: end;
  }
`;
