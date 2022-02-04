import React from "react";
import { Link } from "gatsby";
import { ButtonMenu, LinkMenu, Nav } from "./styles";
// import LinkMenu from "./styles";

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
              <LinkMenu className="nav-link ">
                <Link
                  to="/"
                  activeStyle={{ color: "#66d9ef" }}
                  className="nav-link"
                >
                  Home
                </Link>
              </LinkMenu>
            </li>
            <li className="nav-item" data-menuanchor="sobre-mi">
              <LinkMenu className="nav-link " href="#sobre-mi">
                Sobre mi
              </LinkMenu>
            </li>
            {/* <li className="nav-item">
              <LinkMenu
                className="nav-link"
                data-menuanchor="servicios"
                href="#servicios"
              >
                Servicios
              </LinkMenu>
            </li> */}
            <li className="nav-item">
              <LinkMenu className="nav-link" href="#proyectos">
                Porfolio
              </LinkMenu>
            </li>
            <li className="nav-item">
              <LinkMenu>
                <Link
                  to="/blog"
                  activeStyle={{ color: "#66d9ef" }}
                  className="nav-link"
                >
                  Blog
                </Link>
              </LinkMenu>
            </li>
          </ul>
          <ul className="navbar-nav ms- mb-2 mb-lg-0">
            <li className="nav-item">
              <ButtonMenu className="btn btn-primary rounded-pill">
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
