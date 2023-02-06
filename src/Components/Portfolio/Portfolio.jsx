import React from "react";
import Works from "./Works";

function Portfolio() {
  return (
    <section className="work sctn" id="portfolio">
      <div className=" flex flex-col items-center mb-4">
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle text-sm">
          Mi historial de trabajos
        </span>
      </div>
      <Works />
    </section>
  );
}

export default Portfolio;
