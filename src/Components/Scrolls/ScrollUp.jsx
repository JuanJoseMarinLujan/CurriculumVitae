import React from "react";

function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a
      href="#Inicio"
      className="scrollUp fixed right-10 -bottom-[20%] bg-titleColor opacity-80 py-[0.3rem] px-2 rounded-md z-10 hover:bg-titleDarkColor lg:right-6 lg:py-1 lg:px-2"
    >
      <i className="uil uil-arrow-up scrollUp__icon text-2xl text-containerColor lg:text-xl"></i>
    </a>
  );
}

export default ScrollUp;
