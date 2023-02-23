import React from "react";

const Labour = ({ item, toggleState }) => {
  return (
    <div
      className={
        toggleState === 2 || toggleState === 0
          ? "grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2"
          : "hidden"
      }
    >
      <div></div>
      <div>
        <span className="inline-block w-[13px] h-[13px] bg-titleColor rounded-[50%]"></span>
        <span className="experience__line -mt-[25px] block w-[1px] h-[106%] bg-textColor"></span>
      </div>
      <div className="w-full">
        <h3 className="text-base font-medium">
          <i className="uil uil-briefcase-alt text-2xl mr-1"></i>{" "}
          {item.role}
        </h3>
        <span className="inline-block text-sm mb-4">
          {item.company} - {item.city}
        </span>
        <div className="text-sm">
          <i className="uil uil-calendar-alt"></i> {item.initialyear} -{" "}
          {item.finalyear}
        </div>
      </div>
    </div>
  );
};

export default Labour;
