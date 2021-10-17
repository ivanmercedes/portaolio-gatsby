import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import img from "../images/side-element.svg";
import RamdonFigure from "./RandomFigure";
import Slider from "./Slider";

const AbouttsLists = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center left;
  padding: 5rem 0 5rem 0;
  position: relative;
  @media (max-width: 768px) {
    background-image: unset;

    .wrapper {
      display: none;
    }
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

const Desc = styled.p`
  font-size: 1rem;
  span {
    color: #66d9ef;
    display: inline;
    font-weight: 700;
  }
`;
const About = () => {
  return (
    <AbouttsLists id="sobre-mi">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 d-none d-lg-block order-1 order-lg-1">
            <StaticImage
              src="../images/sobremi.webp"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Iván Mercedes Avatar"
            />
          </div>
          <div className="col-md-4 order-0 order-lg-1 align-self-center">
            <Title>Sobre mi 🙋🏻‍♂️</Title>
            <Desc>
              Soy <span> Iván Mercedes</span>, un programador Web Full-Stack
              talentoso con habilidades de desarrollo web tanto en el Front-end
              como en el Back-end. Me apasiona aprovechar mis diversos
              conocimientos para descifrar problemas desafiantes y crear las
              mejores soluciones.
            </Desc>
            <Desc>
              Desarrollo sitios web con diversas tecnologías entre ellas están
              <span>
                {" "}
                HTML, CSS, JAVASCRIPT, REACT, NEXT, SVELTE, PHP, MYSQL, NODEJS,
                EXPRESS, MONGODB, WORDPRESS
              </span>{" "}
              y muchas más.
            </Desc>

            <Desc>
              Soy un programador trabajador y orientado a resultados, siempre
              trabajo para lograr el mejor resultado en cada proyecto que tengo
              en mis manos.
            </Desc>

            <a href="#cv" className="btn btn-primary rounded-pill">
              Descargar mi CV
            </a>
          </div>
        </div>
      </div>
      <Slider />

      <RamdonFigure />
    </AbouttsLists>
  );
};

export default About;
