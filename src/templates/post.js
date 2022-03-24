import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";

import styled from "styled-components";
import { Helmet } from "react-helmet";

const BlogPost = styled.div`
  background-color: #212121;
  box-shadow: 2px 2px 7px #0000004a;
  border-radius: 20px;
  padding: 1rem;
  max-width: 970px;
  margin: 7rem auto;

  h2 {
    font-weight: bold;
    color: #66d9ef;
  }
  img {
    max-width: 100%;
  }
`;

const Post = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.datoCmsBlog.title}</title>
      <meta
        name="description"
        content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
      />
    </Helmet>
    <Navbar />
    <article className="container">
      <BlogPost>
        <h1 className="blog_title">{data.datoCmsBlog.title}</h1>
        <div
          className="blog_body"
          style={{ fontSize: 17 }}
          dangerouslySetInnerHTML={{
            __html: data.datoCmsBlog.contentNode.childMarkdownRemark.html,
          }}
        />
      </BlogPost>
    </article>
  </Layout>
);

export default Post;

export const query = graphql`
  query Posts($slug: String!) {
    datoCmsBlog(postSlug: { eq: $slug }) {
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
