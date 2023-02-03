import React from "react";
import Works from "./Works";

function Portfolio() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portafolio</h2>
      <span className="section__subtitle">Mi historial de trabajos</span>
      <Works />
    </section>
  );
}

export default Portfolio;
