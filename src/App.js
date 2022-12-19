import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners";
import EditorsPick from "./components/EditorsPick/EditorsPick";
import HeroSec from "./components/HeroSec";
import SellNFT from "./components/SellNFT/SellNFT";
import Auctions from "./components/Auctions/Auctions";
import TopSellers from "./components/TopSellers/TopSellers";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Hero />
        <Partners />
        <EditorsPick />
        <HeroSec />
        <SellNFT />
        <Auctions />
        <TopSellers />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}

export default App;
