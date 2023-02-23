import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "../Scrolls/ScrollDown";

import User from "../../Data/Data.json";

function Home() {
  return (
    <section className="sctn" id="home">
      <div className="cntnr grid">
        <div className="grid gap-5 grid-cols-[0.5fr_3fr] lg:grid-cols-[100px_repeat(2,_1fr)] dt:grid-cols-[116px_repeat(2,_1fr)] place-content-center gap-x-5 dt:gap-x-8 items-center p-5 lg:mb-10">
          <Social />
          <img
            src={User.img}
            alt=""
            className="home__img w-44 sm:w-52 lg:w-56 dt:w-80 h-44 sm:h-52 lg:h-w-56 dt:h-80 border order-[initial] dt:order-1 justify-self-[initial] dt:justify-self-center"
          />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
