import React from "react";
import Chats from "./Chats";
import Form from "./Form";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contactarme</h2>
      <span className="section__subtitle">Escribeme</span>

      <div className="contact__container container grid">
        <Chats />
        <Form />
      </div>
    </section>
  );
}

export default Contact;
