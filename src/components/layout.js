import * as React from "react";
import PropTypes from "prop-types";
import Header from "./header";

import "./scss/app.scss";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
// import Scroll from "./scroll";

const GlobalStyle = createGlobalStyle`
body {
    background: #262626!important;
    color: white;
}
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
