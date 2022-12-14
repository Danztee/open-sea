import styled from "styled-components";
import Button from "../UI/Button";

import play from "../../assets/play.png";

const Text = () => {
  return (
    <Wrapper className="">
      <h1 className="mb-4">
        Discover, sell and explore the beautiful art of NFTs
      </h1>

      <p className="mb-4">
        DIscover and sell the art of NFT DIscover and sell the art of NFT
        DIscover and sell the art of NFT DIscover and sell the art of NFT
      </p>

      <div style={{ display: "flex", gap: "5rem" }} className="mb-3">
        <Button title="Explore &#8594;" />
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="video-box">
            <img src={play} alt="" />
          </div>
          <p>Watch video</p>
        </div>
      </div>
      {/*  */}

      <div className="done d-flex">
        <p>
          21k+ <br /> Downloads
        </p>

        <p className="has-border">
          100K+ <br /> Reviews
        </p>

        <p>
          20M+ <br /> Purchase
        </p>
      </div>
    </Wrapper>
  );
};

export default Text;

const Wrapper = styled.div`
  @media screen and (min-width: 992px) {
    padding-right: 6rem;
    margin-top: 4rem;
  }

  .video-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fcf7fd;
    position: relative;

    img {
      top: 0.7rem;
      position: absolute;
      left: 0.8rem;
      position: absolute;
      width: 1.1rem;
    }
  }

  .done {
    margin-top: 3rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    box-shadow: 0px 4px 24px -1px rgba(184, 66, 208, 0.25);
    backdrop-filter: blur(25px);

    @media screen and (min-width: 992px) {
      margin-top: 6rem;
    }

    p {
      font-size: 15px;
      margin: 1rem 0;
      width: 100%;
      padding: 0.8rem 1rem;
      @media screen and (min-width: 992px) {
        padding: 0.5rem 2.4rem;
      }
    }

    .has-border {
      border-right: 3px solid #f1d8f3;
      border-left: 3px solid #f1d8f3;
    }
  }
`;
