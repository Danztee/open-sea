import styled from "styled-components";
import history from "../../assets/history.png";

import tiger from "../../assets/tiger.png";
import peter from "../../assets/peter.png";

import beam from "../../assets/beam.png";
import kate from "../../assets/kate.png";

import honey from "../../assets/honey.png";
import joan from "../../assets/joan.png";

import newKid from "../../assets/new.png";
import karl from "../../assets/karl.png";

import homicide from "../../assets/homicide.png";
import ella from "../../assets/ella.png";

import everton from "../../assets/everton.png";
import kole from "../../assets/kole.png";

import Button from "../UI/Button";
import { Link } from "react-router-dom";

const arts = [
  {
    artImg: tiger,
    name: "Tiger swag",
    no: "#127",
    ownerPic: peter,
    ownerName: "peter paul",
    bid: "1 ETH",
  },

  {
    artImg: beam,
    name: "Perfecto beam",
    no: "#099",
    ownerPic: kate,
    ownerName: "Kate Paul",
    bid: "1.5 ETH",
  },

  {
    artImg: honey,
    name: "Perfecto beam",
    no: "#09",
    ownerPic: joan,
    ownerName: "Joan kid",
    bid: "5 ETH",
  },
  {
    artImg: newKid,
    name: "New orleans kid",
    no: "#700",
    ownerPic: karl,
    ownerName: "Karl max",
    bid: "5 ETH",
  },
  {
    artImg: homicide,
    name: "Homicide pig",
    no: "#59",
    ownerPic: ella,
    ownerName: "Ella sun",
    bid: "2 ETH",
  },

  {
    artImg: everton,
    name: "Everton fox",
    no: "#800",
    ownerPic: kole,
    ownerName: "kole paul",
    bid: "1 ETH",
  },
];

export const EditorsCard = ({
  artImg,
  name,
  no,
  ownerPic,
  ownerName,
  bid,
  style,
}) => {
  return (
    <Wrapper className="mt-5" style={style}>
      <div style={{ padding: "1em" }}>
        <img src={artImg} alt="" />

        <div className="name-no my-2">
          <h4>{name}</h4>
          <h4 style={{ color: "#f91a9f" }}>{no}</h4>
        </div>

        <div className="bidder my-2" style={{ fontSize: "15px" }}>
          <img src={ownerPic} alt={ownerName} />
          <p style={{ color: "rgba(252, 247, 253, 0.5)" }}>
            Owned by <br /> <span>{ownerName}</span>
          </p>
          <p>
            Current bid <br /> <span>{bid}</span>
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button title="Bid now" className="bid-btn" />

          <div className="d-flex align-items-center gap-2">
            <img src={history} alt="history" style={{ width: "15%" }} />
            <Link style={{ fontSize: "14px" }}>View History</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EditorsCardContainer = () => {
  return (
    <WrapperContainer>
      {arts.map((art, index) => {
        const { artImg, name, no, ownerPic, ownerName, bid } = art;

        return (
          <EditorsCard
            artImg={artImg}
            name={name}
            no={no}
            ownerPic={ownerPic}
            ownerName={ownerName}
            bid={bid}
            key={index}
          />
        );
      })}
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 992px) {
    justify-content: space-between;
  }
`;

const Wrapper = styled.aside`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 24px -1px rgba(184, 66, 208, 0.25);
  backdrop-filter: blur(25px);
  border: solid 1px #fcf7fd;

  max-width: 300px;

  img {
    width: 100%;
  }

  .name-no {
    display: flex;
    justify-content: space-between;
  }

  .bidder {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 20%;
      border-radius: 50%;
    }
  }

  .bid-btn {
    background: linear-gradient(270deg, #9933a2 -20.43%, #f91a9f 100%);
    outline: none;
    border: none;
    color: #fcf7fd;
    width: 6rem;

    &:hover {
      background: transparent;
      border: solid 1px #fcf7fd;
    }
  }
`;

export default EditorsCardContainer;
