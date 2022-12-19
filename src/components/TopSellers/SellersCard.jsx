import styled from "styled-components";
import { Link } from "react-router-dom";

const SellersCard = ({ img, name, sold }) => {
  return (
    <Wrapper className="p-2 mt-5">
      <img src={img} alt={name} />

      <div>
        <h5>{name}</h5>
        <p>Over {sold} ETH</p>
        <p style={{ color: "#F91A9F" }}>sold</p>
      </div>

      <Link className="icon">...</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(241, 216, 243, 0.5);
  min-width: 300px;
  max-width: auto;
  justify-content: space-between;

  img {
    width: 3rem;
  }

  .icon {
    font-size: 2rem;
  }
`;
export default SellersCard;
