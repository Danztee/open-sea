import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { EditorsCard } from "../EditorsPick/EditorsCard";

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

import city from "../../assets/city.png";
import gold from "../../assets/gold.png";
import swag from "../../assets/swag.png";

import gaut from "../../assets/gaut.png";
import paul from "../../assets/paul.png";
import stone from "../../assets/stone.png";

const arts = [
  {
    artImg: gold,
    name: "Tiger Gold",
    no: "#186",
    ownerPic: gaut,
    ownerName: "peter gaut",
    bid: "2 ETH",
  },
  {
    artImg: swag,
    name: "Tiger ape",
    no: "#132",
    ownerPic: paul,
    ownerName: "John paul",
    bid: "1 ETH",
  },
  {
    artImg: city,
    name: "Tiger City",
    no: "#157",
    ownerPic: stone,
    ownerName: "Key stone",
    bid: "5 ETH",
  },
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

export const SwiperContainer = () => {
  return (
    <Swiper
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      //   slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {arts.map((art, index) => {
        const { artImg, name, no, ownerPic, ownerName, bid } = art;

        return (
          <SwiperSlide key={index} id="swipe-slide">
            <EditorsCard
              artImg={artImg}
              name={name}
              no={no}
              ownerPic={ownerPic}
              ownerName={ownerName}
              bid={bid}
              key={index}
              style={{ marginBottom: "4rem" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperContainer;
