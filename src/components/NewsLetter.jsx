import styled from "styled-components";
import Button from "./UI/Button";

const NewsLetter = () => {
  return (
    <Wrapper className="py-4 my-5">
      <h2 style={{ fontWeight: "bold" }}>Never miss a drop</h2>
      <p>Get updates about latest NFTs and Art</p>
      <form action="" className="mt-3 d-flex">
        <input type="email" placeholder="Enter your Email" required />
        <div className="sub-btn">
          <Button title="Subscribe" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) -94%,
    rgba(255, 255, 255, 0.1) 6%
  );
  box-shadow: 0px 4px 24px rgba(184, 66, 208, 0.25);
  backdrop-filter: blur(25px);
  text-align: center;
  border: groove 1px #fcf7fd;

  form {
    align-items: center;
    justify-content: center;

    input {
      background: rgba(241, 216, 243, 0.5);
      outline: none;

      height: 3.5rem;
      padding: 1rem;
      border: none;
      font-size: 1.4rem;

      &::placeholder {
        color: rgba(252, 247, 253, 0.5);
      }

      padding-right: 9rem;

      width: 100%;
      margin: 0 1rem;

      @media screen and (min-width: 992px) {
        width: 30rem;
        margin: 0;
      }
    }

    .sub-btn {
      position: absolute;
      margin-left: 13rem;

      @media screen and (min-width: 992px) {
        margin-left: 21rem;
      }

      button {
        width: 7.5rem;
        background: linear-gradient(180deg, #f91a9f 0%, #9933a2 100%);
        color: #fcf7fd;
        outline: none;
        border: none;
      }
      /* margin-left: -8.2rem;
      margin-top: 8px;
     
       */
    }
  }
`;
export default NewsLetter;
