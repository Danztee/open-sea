import styled from "styled-components";
import SellersCard from "./SellersCard";

import tesa from "../../assets/tesa.png";
import jo from "../../assets/jo.png";
import ki from "../../assets/ki.png";
import andy from "../../assets/andy.png";
import pau from "../../assets/pau.png";
import tuma from "../../assets/tuma.png";

import Button from "../UI/Button";

const data = [
  {
    img: tesa,
    name: "Tesa Jane",
    sold: "10.5",
  },
  {
    img: ki,
    name: "Jane ki",
    sold: "20.0",
  },
  {
    img: pau,
    name: "Pau kie",
    sold: "20.0",
  },
  {
    img: andy,
    name: "Andy june",
    sold: "10.5",
  },
  {
    img: tuma,
    name: "Tuma jel",
    sold: "20.5",
  },
  {
    img: jo,
    name: "Jo brown",
    sold: "20.5",
  },
];

const TopSellers = () => {
  return (
    <Wrapper className="my-5">
      <h1>Top NFT sellers</h1>
      <div className="cover">
        {data.map((data, index) => (
          <SellersCard
            img={data.img}
            name={data.name}
            sold={data.sold}
            key={index}
          />
        ))}
      </div>
      <div className="see-btn mt-4">
        <Button title="See all" style={{ width: "6rem" }} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cover {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width: 992px) {
      justify-content: space-between;
    }
  }

  .see-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default TopSellers;
