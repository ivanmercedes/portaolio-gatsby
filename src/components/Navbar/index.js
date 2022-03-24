import React from "react";
import { Link } from "gatsby";
import { ButtonMenu, LinkMenu, Nav, NavContainer, NavUlList } from "./styles";

const Navbar = () => {
  
  return (
    <Nav >
      <div className="container">
        <NavContainer  id="navbarSupportedContent">
          <NavUlList>
            <li data-menuanchor="inicio">
              <LinkMenu>
                <Link
                  to="/"
                  activeStyle={{ color: "#66d9ef" }}
                >
                  Home
                </Link>
              </LinkMenu>
            </li>
            <li data-menuanchor="sobre-mi">
              <LinkMenu >
                 <Link
                  to="/#sobre-mi"
                  activeStyle={{ color: "#66d9ef" }}
                  
                >
                  Sobre mi
                </Link>
              </LinkMenu>
            </li>
            {/* <li>
              <LinkMenu
                
                data-menuanchor="servicios"
                href="#servicios"
              >
                Servicios
              </LinkMenu>
            </li> */}
            <li>
              <LinkMenu  to="/#proyectos" stripHash>
                  <Link
                  to="/#proyectos"
                  activeStyle={{ color: "#66d9ef" }}
                  
                >
                  Proyectos
                </Link>
              </LinkMenu>
            </li>
            <li>
              <LinkMenu>
                <Link
                  to="/blog"
                  activeStyle={{ color: "#66d9ef" }}
                  
                >
                  Blog
                </Link>
              </LinkMenu>
            </li>
          </NavUlList>
          <ul className="navbar-nav ms- mb-2 mb-lg-0">
            <li>
              <ButtonMenu className="btn btn-primary rounded-pill">
              <Link
                  to="/#contacto"
                  activeStyle={{ color: "#66d9ef" }}
                  style={{ color: '#262626', fontWeight:'Bold' }}
                >
                  Contacto
                </Link>
              </ButtonMenu>
            </li>
          </ul>
        </NavContainer>
      </div>
    </Nav>
  );
};

export default Navbar;
