import * as React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import Contact from "../components/Contact";
import Layout from "../components/layout";
import Portafolio from "../components/Portafolio";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ivan Mercedes</title>
      </Helmet>
      <About />
      <Portafolio />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
