import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">J J M L</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/juanjosemarinlujan"
            className="footer__social-link instagram"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juanjosemarinlujan"
            className="footer__social-link linkedin"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/JuanJoseMarinLujan"
            className="footer__social-link github"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Por: Juan Jose Marin Lujan</span>
      </div>
    </footer>
  );
}

export default Footer;
