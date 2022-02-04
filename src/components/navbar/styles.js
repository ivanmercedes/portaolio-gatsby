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

const LinkMenu = styled.div`
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
  font-size: 1.2rem;
  a {
    text-decoration: none;
  }
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

export { Nav, LinkMenu, ButtonMenu };
