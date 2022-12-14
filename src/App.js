import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners";
import EditorsPick from "./components/EditorsPick/EditorsPick";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Hero />
        <Partners />
        <EditorsPick />
      </main>
    </>
  );
}

export default App;
