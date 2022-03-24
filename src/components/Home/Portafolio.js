import React from "react";
import styled from "styled-components";

import { graphql, useStaticQuery } from "gatsby";
import Project from "./Project";
import img from "../../images/side-element.svg";
import RamdonFigure from "./randomFigure";

const ProjectsLists = styled.section`
  padding: 5rem 0 5rem 0;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center right;
  position: relative;
  @media (max-width: 768px) {
    background-image: unset;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2.8rem;
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 0.4rem;
  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: #66d9ef;
    bottom: -4px;
  }
`;

const Portafolio = () => {
  const projects = useStaticQuery(graphql`
    query {
      allDatoCmsProyecto(sort: { order: DESC, fields: originalId }) {
        edges {
          node {
            name
            originalId
            category
            thumbnail {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                forceBlurhash: false
              )
            }
            images {
              gatsbyImageData(
                width: 600

                placeholder: BLURRED
                forceBlurhash: false
              )
            }
          }
        }
      }
    }
  `);

  const projectsList = projects.allDatoCmsProyecto.edges;
  return (
    <ProjectsLists id="proyectos">
      <div className="container">
        <header className="text-center mb-5">
          <Title>Mis proyectos</Title>
        </header>
        <div className="row">
          {projectsList.map((project) => (
            <Project key={project.node.originalId} data={project.node} />
          ))}
        </div>
      </div>
      <RamdonFigure />
    </ProjectsLists>
  );
};

export default Portafolio;
