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
section, footer, main {
  overflow: hidden;
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
