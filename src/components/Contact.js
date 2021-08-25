import React from "react";
import styled from "styled-components";
import img from "../images/side-element.svg";
import RamdonFigure from "./RandomFigure";

const ContactForm = styled.section`
  padding: 5rem 0 5rem 0;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center left;
  position: relative;
  @media (max-width: 768px) {
    background-image: unset;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2.8rem;
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 0.4rem;
  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: #66d9ef;
    bottom: -4px;
  }
`;
const Contact = () => {
  return (
    <ContactForm>
      <div className="container">
        <header className="text-center mb-5">
          <Title>Contáctame</Title>
          <p>
            Estoy disponible para trabajar en sus proyectos y dar vida a sus
            ideas.
          </p>
        </header>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              action="https://getform.io/f/3cb40a00-4987-4d10-a51d-8c60cece8829"
              method="post"
            >
              <input
                type="text"
                name="nombre"
                className="form-control bg-dark rounded-pill mb-4 text-white"
                placeholder="Nombre"
              />

              <input
                type="email"
                name="email"
                className="form-control bg-dark rounded-pill mb-4 text-white"
                placeholder="Email"
              />

              <input
                type="text"
                name="telefono"
                className="form-control bg-dark rounded-pill mb-4 text-white"
                placeholder="Telefono"
              />

              <textarea
                name="mensaje"
                cols="30"
                rows="10"
                style={{ borderRadius: "20px" }}
                className="form-control bg-dark text-white mb-4"
                placeholder="Tu mensaje..."
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4 btn-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <RamdonFigure />
    </ContactForm>
  );
};

export default Contact;
