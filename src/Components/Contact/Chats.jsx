import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

function Chats() {
    const { whatsapp, messenger } = useGlobalContext();
  return (
    <div className="contact__content">
      <h3 className="contact__title">Mensaje via</h3>

      <div className="contact__info">
        <div className="contact__card">
          <i className="bx bxl-whatsapp contact__card-icon"></i>
          <h3 className="contact__card-title">WhatsApp</h3>
          <span className="contact__card-data">{whatsapp.phone}</span>
          <a href={whatsapp.url} className="contact__button" target="_blank">
            Escribeme{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>

        <div className="contact__card">
          <i className="bx bxl-messenger contact__card-icon"></i>
          <h3 className="contact__card-title">Messenger</h3>
          <span className="contact__card-data">{messenger.username}</span>
          <a href={messenger.url} className="contact__button" target="_blank">
            Escribeme{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chats;
