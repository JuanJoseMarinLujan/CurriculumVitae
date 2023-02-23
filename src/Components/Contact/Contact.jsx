import React from "react";
import Chats from "./Chats";
import Form from "./Form";

function Contact() {
  return (
    <section className="contact sctn" id="contact">
      <div className=" flex flex-col items-center mb-4">
        <h2 className="">Contactarme</h2>
        <span className="text-sm">Escribeme</span>
      </div>

      <div className="cntnr grid gap-x-12 lg:gap-x-24 pb-12 lg:grid-cols-2 justify-center">
        <Chats />
        <Form />
      </div>
    </section>
  );
}

export default Contact;