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
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BlogListCol = styled.div`
  flex: 0 0 31.33%;
  margin-bottom: 1rem;
  background-color: #212121;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 2px 2px 7px #0000004a;
  width: 31.33%;
`;

const LinkBlog = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  h3{
    margin-top: 1rem
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const BlogPage = ({ data }) => {
  const posts = data.allDatoCmsBlog.edges;
  
console.log(posts)

  const getThumbnail = (imageData) => {
    return  getImage(imageData)
  }
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
              <BlogListCol key={post.node.originalId}>
                <LinkBlog to={`/blog/${post.node.postSlug}`}>
                  <GatsbyImage image={getThumbnail(post.node.thumbnail)} alt="" />
                  <h3>{post.node.title}</h3>
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
    allDatoCmsBlog {
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
