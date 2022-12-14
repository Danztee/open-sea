import styled from "styled-components";
import binance from "../assets/binance.png";
import solana from "../assets/solana.png";
import bitmex from "../assets/bitmex.png";
import coinbase from "../assets/coinbase.png";

const partnersImg = [
  {
    id: 1,
    img: solana,
    alt: "solana",
  },
  {
    id: 2,
    img: binance,
    alt: "binance",
  },
  {
    id: 3,
    img: bitmex,
    alt: "bitmex",
  },
  {
    id: 4,
    img: coinbase,
    alt: "coinbase",
  },
];

const Partners = () => {
  return (
    <Wrapper className="my-5">
      {partnersImg.map((partnerImg) => {
        const { id, img, alt } = partnerImg;
        return <img src={img} alt={alt} key={id} />;
      })}
    </Wrapper>
  );
};

export default Partners;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #f5f5f5;
  padding: 1.5rem;

  img {
    width: 15%;
  }
`;
