import styled from "styled-components";
import Button from "./UI/Button";
import one from "../assets/four-one.png";
import two from "../assets/four-two.png";
import three from "../assets/four-three.png";
import four from "../assets/four-four.png";

const HeroSec = () => {
  return (
    <Wrapper className="row">
      <div className="col-sm-12 col-md-6" id="first-cover">
        <h1 className="mb-4">Get more beautiful art work here</h1>

        <p className="mb-4">
          Get more beautiful art work here Get more beautiful art work here Get
          more beautiful art work here
        </p>

        <div style={{ display: "flex", gap: "5rem" }} className="mb-3">
          <Button title="Explore &#8594;" />
        </div>
      </div>

      <div className="col-sm-12 col-md-6" id="second-cover">
        <div className="img-container">
          <div style={{ marginTop: "10rem" }}>
            <img src={one} alt="" className="img-1" />
            <img src={two} alt="" className="img-2" />
            <img src={three} alt="" className="img-3" />
            <img src={four} alt="" className="img-4" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #first-cover {
    @media screen and (min-width: 992px) {
      padding-right: 7rem;
      margin-top: 10rem;
    }
  }

  #second-cover {
    display: none;

    @media screen and (min-width: 992px) {
      display: block;
    }
  }

  .img-container {
    position: relative;
    height: 25rem;
    left: 5rem;

    img {
      position: absolute;
      width: 10rem;
    }

    .img-1 {
    }
    .img-2 {
      top: -7rem;
      left: 10.5rem;
    }
    .img-3 {
      bottom: 4rem;
      left: 10.5rem;
    }
    .img-4 {
      left: 20rem;
    }
  }
`;

export default HeroSec;
