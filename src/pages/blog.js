import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import styled from "styled-components";

const BlogListSection = styled.section`
  padding-top: 8rem;
  padding-bottom: 5rem;
  min-height: 90vh;
`;
const BlogListRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 13px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const BlogListCol = styled.div`
  flex: 0 0 31.33%;
  margin-bottom: 1rem;
  background-color: #212121;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 2px 2px 7px #0000004a;
  width: 31.33%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const LinkBlog = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  h3 {
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const BlogTitle = styled.h3`
  color: #66d9ef;
  text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975,
    0 0 8px #03edf975;
`;
const BlogPage = ({ data }) => {
  const posts = data.allDatoCmsBlog.edges;

  console.log(posts);

  const getThumbnail = (imageData) => {
    return getImage(imageData);
  };
  return (
    <Layout>
      <Helmet>
        <title>Blog - Ivan Mercedes</title>
        <meta
          name="description"
          content="Blog personal para compartir mis conocimientos y tutoriales sobre programación en Javascript, PHP, React, React Native y Laravel."
        />
      </Helmet>
      <Navbar />
      <BlogListSection>
        <div className="container">
          <Title>Mi Blog</Title>

          <BlogListRow>
            {posts.map((post) => (
              // {(posts.reverse()).map((post) => (
              <BlogListCol key={post.node.originalId}>
                <LinkBlog to={`/blog/${post.node.postSlug}`}>
                  <GatsbyImage
                    image={getThumbnail(post.node.thumbnail)}
                    alt=""
                  />
                  <BlogTitle>{post.node.title}</BlogTitle>
                </LinkBlog>
              </BlogListCol>
            ))}
          </BlogListRow>
        </div>
      </BlogListSection>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query Blogs {
    allDatoCmsBlog(sort: { fields: id, order: DESC }) {
      edges {
        node {
          title
          originalId
          postSlug
          thumbnail {
            gatsbyImageData(
              width: 400
              height: 300
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
        }
      }
    }
  }
`;
