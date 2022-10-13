import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const FooterPage = styled.footer`
  background-color: #212121;
  padding: 1rem;
`;

const Built = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const Footer = () => {
  return (
    <FooterPage>
      <div className="container">
        <Built>
          Built with{" "}
          <a
            href="https://www.gatsbyjs.com/"
            title="GatsbyJS"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/Gatsby_Logo.png"
              quality={100}
              width={160}
              // formats={["AUTO", "WEBP", "AVIF"]}
              alt="Built with Gatsby"
            />
          </a>{" "}
          Open sourced on{" "}
          <StaticImage
            src="../images/github.png"
            quality={100}
            width={40}
            // formats={["AUTO", "WEBP", "AVIF"]}
            alt="Built with Gatsby"
          />{" "}
          and deployed on{" "}
          <a
            href="https://www.gatsbyjs.com/products/cloud/"
            target="_blank"
            rel="noreferrer"
            title="Gatsby Cloud"
          >
            <StaticImage
              src="../images/Cloud.svg"
              quality={100}
              width={60}
              // formats={["AUTO", "WEBP", "AVIF"]}
              alt="Built with Gatsby"
            />
          </a>
        </Built>
      </div>
    </FooterPage>
  );
};

export default Footer;
