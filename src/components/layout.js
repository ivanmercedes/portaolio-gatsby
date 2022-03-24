import * as React from "react";
import PropTypes from "prop-types";

import "./scss/app.scss";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
body {
    background: #262626 !important;
    color: white;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
section, footer, main {
  overflow: hidden;
}

.container{
    max-width: 1320px;
    width: 100%;
    padding-right:  0.75rem;
    padding-left:  0.75rem;
    margin-right: auto;
    margin-left: auto;
}
`;

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
