import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "../Scrolls/ScrollDown";

import { useGlobalContext } from "../../context/GlobalContext";

function Home() {
  const { user } = useGlobalContext();

  return (
    <section className="home pt-20 md:pt-28" id="home">
      <div className="cntnr grid">
        <div className="grid gap-5 grid-cols-[0.5fr_3fr] lg:grid-cols-[100px_repeat(2,_1fr)] dt:grid-cols-[116px_repeat(2,_1fr)] place-content-center gap-x-5 dt:gap-x-8 items-center p-5 lg:mb-10">
          <Social />
          <img
            src={user.img}
            alt=""
            className="home__img w-44 sm:w-52 lg:w-64 dt:w-80 h-44 sm:h-52 lg:h-64 dt:h-80 border order-[initial] dt:order-1 border-[solid_9px_rgba(8,8,8,0.655)] justify-self-[initial] dt:justify-self-center shadow-[inset_0_0_0_6px_rgba(8,8,8,0.655)] lg:shadow-[inset_0_0_0_8px_rgba(8,8,8,0.655)]"
          />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
