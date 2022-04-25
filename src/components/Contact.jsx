import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <form className="contact-form" action="">
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="contact-input"
          type="text"
          placeholder="Nombre"
          required
        />
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          className="contact-input"
          type="email"
          placeholder="Email"
          required
        />
        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
          className="contact-input textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tu consulta"
          required
        ></motion.textarea>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="contact-button" type="submit">
            Enviar
          </button>
          <button type="reset">Borrar</button>
        </motion.div>
      </form>
    </section>
  );
}

export default Contact;
