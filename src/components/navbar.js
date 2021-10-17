import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #212121b3;
  padding: 1rem 0 1rem 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;

const LinkMenu = styled.a`
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
  font-size: 1.2rem;
  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

const ButtonMenu = styled.button`
  padding: 0.5rem 1.8rem 0.5rem 1.8rem;
  font-weight: 700;
  @media (max-width: 750px) {
    font-size: 0.9rem;
  }
`;

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand navbar-dark" data-aos="fade-down">
      <div className="container">
        {/* <a className="navbar-brand" href="/">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="menu" className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" data-menuanchor="inicio">
              <LinkMenu
                className="nav-link "
                aria-current="page"
                href="#inicio"
              >
                Home
              </LinkMenu>
            </li>
            <li className="nav-item" data-menuanchor="sobre-mi">
              <LinkMenu
                className="nav-link "
                aria-current="page"
                href="#sobre-mi"
              >
                Sobre mi
              </LinkMenu>
            </li>
            {/* <li className="nav-item">
              <LinkMenu
                className="nav-link"
                aria-current="page"
                data-menuanchor="servicios"
                href="#servicios"
              >
                Servicios
              </LinkMenu>
            </li> */}
            <li className="nav-item">
              <LinkMenu
                className="nav-link"
                aria-current="page"
                href="#proyectos"
              >
                Porfolio
              </LinkMenu>
            </li>
          </ul>
          <ul className="navbar-nav ms- mb-2 mb-lg-0">
            <li className="nav-item">
              <ButtonMenu className="btn btn-primary rounded-pill" href="/">
                Contacto
              </ButtonMenu>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
