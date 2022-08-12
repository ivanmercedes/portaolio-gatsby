import * as React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Portafolio from "../components/Home/Portafolio";
import Skills from "../components/Home/Skills";
import Layout from "../components/layout";

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
      {/* <Skills /> */}
      <Portafolio />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
