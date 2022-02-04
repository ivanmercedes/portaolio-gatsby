import * as React from "react";
import AOS from "aos";
import styled from "styled-components";
import Navbar from "./Navbar";
import { StaticImage } from "gatsby-plugin-image";

import Particles from "react-particles-js";
import Config from "./particle.config";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Hero = styled.header`
  position: relative;
  background-color: #212121;
  padding: 2rem;
  min-height: 95vh;
  overflow: hidden;
  padding-top: 5rem;
`;

const HeroWrapper = styled.div`
  margin-top: 10%;
  position: relative;
`;

const Hi = styled.p`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #fff;
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 7.2rem;
  line-height: 8.6rem;
  color: #fff;
  margin-bottom: 1.1rem;
  @media (max-width: 750px) {
    font-size: 4.2rem;
    line-height: 4.6rem;
  }
`;

const Sub = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.9rem;
  color: #66d9ef;
`;

const ParticleDiv = styled(Particles)`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

const Info = styled.div`
  position: relative;
  z-index: 1;
`;
const Avatar = styled.div`
  @media (max-width: 750px) {
    z-index: 0;
    margin-top: -5.7rem;
  }
  @media (max-height: 812px) {
    margin-top: 0rem;
  }
`;

const Header = () => {
  React.useEffect(() => {
    AOS.init({
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero id="inicio">
        <ParticleDiv params={Config} />

        <div className="container h-100">
          <HeroWrapper className="row justify-content-center h-100">
            <Info
              className="col-md-4 align-self-center h-100"
              data-aos="fade-right"
            >
              <Hi className="m-0">Hola 👋 soy</Hi>
              <Name>Ivan Mercedes</Name>
              <Sub>Full-stack Web Developer 👨🏻‍💻</Sub>
              <p style={{ fontSize: "1.2rem" }}>
                Soy un desarrollador web con experiencia en los Stacks LAMP y
                MERN ademas de diversas tecnologias.
              </p>
            </Info>

            <Avatar className="col-md-7  text-end" data-aos="fade-left">
              <StaticImage
                src="../images/avatar.webp"
                quality={100}
                // formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Ivan Mercedes Avatar"
              />
            </Avatar>
          </HeroWrapper>
        </div>
      </Hero>
    </>
  );
};


export default Header;
