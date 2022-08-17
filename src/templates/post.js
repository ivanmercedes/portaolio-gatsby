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

  h2,
  .blog_title {
    font-weight: bold;
    color: #66d9ef;
    text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975,
      0 0 8px #03edf975;
  }
  img {
    max-width: 100%;
  }
  p,
  ol {
    color: white;
  }
`;

const Post = ({ data }) => (
  <Layout>
    {/* {console.log(data.datoCmsBlog)} */}
    <Helmet>
      <title>{data.datoCmsBlog.title}</title>
      <meta
        name="description"
        content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
      />

      <meta
        name="description"
        content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content={data.datoCmsBlog.title} />
      <meta
        itemprop="description"
        content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
      />
      <meta itemprop="image" content={data.datoCmsBlog.thumbnail.url} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content={`https://ivanmercedes.com/blog/${data.datoCmsBlog.postSlug}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.datoCmsBlog.title} />
      <meta
        property="og:description"
        content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
      />
      <meta property="og:image" content={data.datoCmsBlog.thumbnail.url} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.datoCmsBlog.title} />
      <meta
        name="twitter:description"
        content="Programador web  Full-stack en Santo Domingo, experto en PHP, LARAVEL, JAVASCRIPT y diversas tecnologias."
      />
      <meta name="twitter:image" content={data.datoCmsBlog.thumbnail.url} />
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
      postSlug
      thumbnail {
        url
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
