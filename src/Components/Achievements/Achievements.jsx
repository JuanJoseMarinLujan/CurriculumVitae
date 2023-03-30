import React from "react";
import { Carousel } from "flowbite-react";

import AchievementsCard from "./AchievementsCard.jsx";
import { Data as User } from "../../Data/Data.js";

function Achievements() {
  return (
    <section className="sctn" id="Logros">
      <div className="cntnr grid">
        <div className="flex flex-col items-center mb-8">
          <h2>Logros</h2>
          <span className=" text-sm">Titulos y certificaciones</span>
        </div>
        <div className="flex bg-containerColor justify-center items-center border rounded-lg h-[650px] shadow-xl">
          <Carousel slideInterval={3000}>
            {User.achievements.items.map((item, index) => {
              return <AchievementsCard key={index} item={item} />;
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
