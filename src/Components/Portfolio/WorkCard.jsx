import React from "react";

function WorkCard({ item }) {
  return (
    <div className="work__card">
      <img src={item.img} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} className="work__button" target="_blank">
        Ver <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkCard;
