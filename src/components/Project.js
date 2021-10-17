import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Card = styled.div`
  background-color: #2b2b2b;
  box-shadow: 0 1.6rem 3.6rem rgb(0 0 0 / 20%);
 height: 100%;
  .title {
    text-align: center;
    padding: 1rem;
    h3 {
      margin: 0;
    }
  }
`;
const Project = (props) => {
  //   console.log(props);
  const { name, thumbnail } = props.data;
  const image = getImage(thumbnail);
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
      <Card>
        <GatsbyImage image={image} alt={name} />
        <div className="title">
          <h3>{name}</h3>
        </div>
      </Card>
    </div>
  );
};

export default Project;
