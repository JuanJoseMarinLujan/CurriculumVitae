import React, { useState } from "react";

function Header() {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  /*=============== TOGGLE MENU ===============*/
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header w-full h-14 fixed top-initial bottom-0 lg:top-0 left-0 z-[100] bg-bodyColor px-5 flex items-center">
      <nav className="nav cntnr h-12 w-full flex justify-between items-center gap-x-4">
        <a href="#home">
          <h1>J J M L</h1>
        </a>

        <div
          className={`${
            toggleMenu ? "bottom-0" : "-bottom-[100%]"
          } nav__menu fixed lg:static left-0 w-full h-auto lg:w-auto bg-bodyColor lg:bg-opacity-0 pt-8 px-1 md:px-6 pb-16 lg:p-0 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] lg:shadow-none rounded-t-3xl duration-[600ms]`}
        >
          <ul className="nav__list grid gap-6 lg:flex lg:gap-x-6 grid-cols-3 lg:grid-cols-1 md:gap-8">
            <li className="nav__item">
              <a
                href="#home"
                className={`${
                  activeNav === "#home" ? "active-link text-titleDarkColor" : ""
                } flex flex-col items-center text-sm text-titleColor font-medium duration-[3000ms] hover:text-titleDarkColor`}
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav__icon block text-2xl lg:hidden"></i>
                Inicio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={`${
                  activeNav === "#about"
                    ? "active-link text-titleDarkColor "
                    : ""
                } flex flex-col items-center text-sm text-titleColor font-medium duration-[3000ms]`}
                onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav__icon block text-2xl lg:hidden"></i>
                Sobre
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={`${
                  activeNav === "#skills"
                    ? "active-link text-titleDarkColor"
                    : ""
                } flex flex-col items-center text-sm text-titleColor font-medium duration-[3000ms]`}
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav__icon block text-2xl lg:hidden"></i>
                Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                className={`${
                  activeNav === "#experience"
                    ? "active-link text-titleDarkColor"
                    : ""
                } flex flex-col items-center text-sm text-titleColor font-medium duration-[3000ms]`}
                onClick={() => setActiveNav("#experience")}
              >
                <i className="uil uil-file-alt nav__icon block text-2xl lg:hidden"></i>
                Experiencia
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={`${
                  activeNav === "#portfolio"
                    ? "active-link text-titleDarkColor"
                    : ""
                } flex flex-col items-center text-sm text-titleColor font-medium duration-[3000ms]`}
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav__icon block text-2xl lg:hidden"></i>
                Portafolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={`${
                  activeNav === "#contact"
                    ? "active-link text-titleDarkColor"
                    : ""
                } flex flex-col items-center text-sm text-titleColor font-medium duration-[3000ms]`}
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav__icon block text-2xl lg:hidden"></i>
                Contacto
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close block lg:hidden absolute right-[1.3rem] bottom-2 text-2xl cursor-pointer text-titleColor hover:text-titleDarkColor"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>

        <div
          className="nav__toggle block lg:hidden cursor-pointer text-titleColor text-lg lg:font-medium"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
