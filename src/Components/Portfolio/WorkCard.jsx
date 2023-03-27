import React from "react";

function WorkCard({ item }) {
  return (
    <div className="work__card bg-containerColor p-5 rounded-2xl grid gap-1 border border-instgrmColor">
      <img src={item.img} alt="" className="work__img w-72 mb-4" />
      <h3 className="text-base font-medium">{item.title}</h3>
      <p className="text-xs text-textColor">{item.tools}</p>
      <a
        href={item.url}
        className="work__button text-textColor hover:text-titleDarkColor text-sm flex items-center gap-x-1 hover"
        target="_blank"
      >
        Ver{" "}
        <i className="bx bx-right-arrow-alt text-base transition-[0.4s]"></i>
      </a>
    </div>
  );
}

export default WorkCard;
