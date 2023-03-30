import React from "react";

function AchievementsCard({ item }) {
  return (
    <article className="h-full w-full grid grid-cols-3 gap-5 justify-between items-center p-10">
      <img
        src={item.image}
        alt=""
        className="border h-full col-span-2 rounded-lg shadow-md"
      />
      <div className="flex flex-col justify-between items-center gap-5">
        <i className="bx bx-badge-check text-8xl text-green-300 mb-10"></i>
        <h3 className="max-w-[350px] text-2xl text-center">{item.title}</h3>
        <div className="text-center">
          <p className="font-bold text-base">{item.university}</p>
          <p className="text-sm">{item.issued}</p>
        </div>
        <a
          href={item.credential}
          target="_blank"
          className="bttn bttn-flex h-5 w-40 text-xl"
        >
          Ver
          <i className="bx bx-right-arrow-alt text-2xl transition-[0.4s]"></i>
        </a>
      </div>
    </article>
  );
}

export default AchievementsCard;
