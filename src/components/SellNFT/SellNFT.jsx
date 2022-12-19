import styled from "styled-components";
import Sell from "./Sell";

import purse from "../../assets/purse.png";
import plus from "../../assets/plus.png";
import triple from "../../assets/triple.png";
import box from "../../assets/box.png";

const data = [
  {
    img: purse,
    text: "Set up your wallet",
    content:
      "Get more beautiful art work here Get more beautiful art work here ",
  },
  {
    img: box,
    text: "Create collection",
    content:
      "Get more beautiful art work here Get more beautiful art work here ",
  },
  {
    img: plus,
    text: "Add your NFTs",
    content:
      "Get more beautiful art work here Get more beautiful art work here ",
  },
  {
    img: triple,
    text: "List them for sale",
    content:
      "Get more beautiful art work here Get more beautiful art work here ",
  },
];

const SellNFT = () => {
  return (
    <Wrapper className="my-5">
      <h1>Create and sell your NFT</h1>
      <div className="dataContainer mt-5">
        {data.map((data, index) => (
          <Sell
            img={data.img}
            text={data.text}
            content={data.content}
            key={index}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dataContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      justify-content: space-between;
    }
  }
`;

export default SellNFT;
