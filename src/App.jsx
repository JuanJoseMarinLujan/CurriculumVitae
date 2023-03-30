import React from "react";

import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/Scrolls/ScrollUp";
import Achievements from "./Components/Achievements/Achievements";

function App() {
  return (
    <>
      <Header />
      <main className="-mr-[11px]">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
