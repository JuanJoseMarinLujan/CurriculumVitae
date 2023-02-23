import React from "react";

const Education = ({ item, toggleState }) => {
  return (
    <div
      className={
        toggleState === 1 || toggleState === 0
          ? "experience__data grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2"
          : "hidden"
      }
    >
      <div className="w-full">
        <h3 className="text-base font-medium">
          <i className="uil uil-graduation-cap text-2xl mr-1"></i> {item.title}
        </h3>
        <span className="inline-block text-sm mb-4">
          {item.university} - {item.city}
        </span>
        <div className="text-sm">
          <i className="uil uil-calendar-alt"></i> {item.initialyear} -{" "}
          {item.finalyear}
        </div>
      </div>
      <div>
        <span className="inline-block w-[13px] h-[13px] bg-titleColor rounded-[50%]"></span>
        <span className="experience__line -mt-[25px] block w-[1px] h-[106%] bg-textColor"></span>
      </div>
    </div>
  );
};

export default Education;
