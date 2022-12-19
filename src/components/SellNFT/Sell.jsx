import styled from "styled-components";

const Sell = ({ img, text, content }) => {
  return (
    <Wrapper>
      <div className="img-back">
        <img src={img} alt="" />
      </div>
      <h4 style={{ color: "#F91A9F" }} className="my-2">
        {text}
      </h4>

      <p className="">{content}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 250px;

  .img-back {
    width: 50px;
    height: 50px;
    border-radius: 10%;
    background: #fcf7fd;
    position: relative;

    img {
      top: 0.7rem;
      position: absolute;
      left: 0.6rem;
      position: absolute;
      width: 2rem;
    }
  }
`;

export default Sell;
