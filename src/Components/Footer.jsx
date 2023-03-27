import React from "react";
import { Data as User } from "../Data/Data.js";

function Footer() {
  return (
    <footer className="footer bg-containerColor">
      <div className="footer__container cntnr pt-8 px-0 pb-8">
        <h1 className="footer__title text-titleColor text-center mb-8">
          J J M L
        </h1>
        <ul className="footer__list flex justify-center gap-3 mb-8">
          <li>
            <a
              href="#about"
              className="footer__link text-titleColor hover:text-titleDarkColor"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="footer__link text-titleColor hover:text-titleDarkColor"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="footer__link text-titleColor hover:text-titleDarkColor"
            >
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer__social flex justify-center items-center gap-5">
          <a
            href={User.socialmedia.instagram}
            className="footer__social-link instagram text-xl lg:text-2xl text-containerColor bg-titleColor p-1 lg:p-2 inline-flex w-10 h-10 justify-center items-center rounded hover:bg-instgrmColor hover:text-[22px]"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href={User.socialmedia.linkedin}
            className="footer__social-link linkedin text-xl lg:text-2xl text-containerColor bg-titleColor p-1 lg:p-2 inline-flex w-10 h-10 justify-center items-center rounded hover:bg-lnkdnColor hover:text-[22px]"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href={User.socialmedia.github}
            className="footer__social-link github text-xl lg:text-2xl text-containerColor bg-titleColor p-1 lg:p-2 inline-flex w-10 h-10 justify-center items-center rounded hover:bg-gthbColor hover:text-[22px]"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy block mt-8 text-titleColor text-center text-xs">
          &#169; Por: Juan Jose Marin Lujan
        </span>
      </div>
    </footer>
  );
}

export default Footer;
