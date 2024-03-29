import React from "react";

function ScrollDown() {
  return (
    <div className="home__scroll hidden lg:flex lg:ml-4 dt:ml-40">
      <a
        href="#Sobre"
        className="home__scroll-button flex justify-center items-center"
      >
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillrule: "evenodd",
            cliprule: "evenodd",
            strokelinecap: "round",
            strokelinejoin: "round",
            strokemiterlimit: "1.5",
          }}
        >
          <path
            className="wheel animate-[scroll_2s_ease_infinite]"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "#333333",
              strokewidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "#333333",
              strokewidth: "20px",
            }}
          ></path>
        </svg>
        <span className="home__scroll-name text-titleColor font-medium mr-1 ml-0.5">
          Hacia Abajo
        </span>
        <i className="uil uil-arrow-down home__scroll-arrow text-xl text-titleColor"></i>
      </a>
    </div>
  );
}

export default ScrollDown;
