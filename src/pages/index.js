import * as React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/header";
import Layout from "../components/layout";
import Portafolio from "../components/Portafolio";
import Skills from "../components/Skills";

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
      <Header />
      <About />
      <Skills />
      <Portafolio />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
