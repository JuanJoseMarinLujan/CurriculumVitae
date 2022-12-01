import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import ImgHome from "../../assets/profile.jpg"

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <img src={ImgHome} alt="" className="home__img" />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
