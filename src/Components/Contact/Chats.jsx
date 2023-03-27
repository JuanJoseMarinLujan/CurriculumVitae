import React from "react";

import { Data as User } from "../../Data/Data.js";

function Chats() {
  return (
    <div>
      <h3 className="text-center text-xl font-medium mb-6">
        Mensaje via
      </h3>

      <div className="grid grid-cols-[1fr] lg:grid-cols-[300px] gap-y-5 lg:gap-y-6 justify-center">
        <div className="contact__card bg-containerColor p-4 rounded-xl text-center">
          <i className="bx bxl-whatsapp contact__card-icon text-4xl text-titleColor mb-1 hover:text-[#25d366]"></i>
          <h3 className="contact__card-title text-sm mb-3 hover:text-[#25d366]">
            WhatsApp
          </h3>
          <span className="block text-sm mb-3 hover:text-[#25d366]">
            {User.contact.whatsapp.phone}
          </span>
          <a
            href={User.contact.whatsapp.url}
            className="contact__button text-textColor text-sm inline-flex items-center justify-center gap-x-1 hover:text-[#25d366]"
            target="_blank"
          >
            Escribeme{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon text-base transition-[0.3s] "></i>
          </a>
        </div>

        <div className="contact__card bg-containerColor p-4 rounded-xl text-center">
          <i className="bx bxl-messenger contact__card-icon text-4xl text-titleColor mb-1 hover:text-[#006AFF]"></i>
          <h3 className="contact__card-title text-sm mb-3 hover:text-[#006AFF]">
            Messenger
          </h3>
          <span className="block text-sm mb-3 hover:text-[#006AFF]">
            {User.contact.messenger.username}
          </span>
          <a
            href={User.contact.messenger.url}
            className="contact__button text-textColor text-sm inline-flex items-center justify-center gap-x-1 hover:text-[#006AFF]"
            target="_blank"
          >
            Escribeme{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon text-base transition-[0.3s]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chats;
