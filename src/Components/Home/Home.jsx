import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "../Scrolls/ScrollDown";

import { useGlobalContext } from "../../context/GlobalContext";

function Home() {
  const { user } = useGlobalContext();  

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <img src={user.img} alt="" className="home__img" />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
