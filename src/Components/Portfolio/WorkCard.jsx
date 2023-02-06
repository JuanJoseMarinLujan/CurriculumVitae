import React from "react";

function WorkCard({ item }) {
  return (
    <div className="work__card bg-containerColor p-5 rounded-2xl">
      <img src={item.img} alt="" className="work__img w-72 mb-4" />
      <h3 className="work__title text-base font-medium mb-2">{item.title}</h3>
      <a href={item.url} className="work__button text-textColor text-sm flex items-center gap-x-1 hover" target="_blank">
        Ver <i className="bx bx-right-arrow-alt work__button-icon text-base transition-[0.4s]"></i>
      </a>
    </div>
  );
}

export default WorkCard;
