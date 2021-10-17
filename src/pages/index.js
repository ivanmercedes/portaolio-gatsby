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
        <meta
          name="description"
          content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
        />
      </Helmet>
      <About />
      <Portafolio />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
