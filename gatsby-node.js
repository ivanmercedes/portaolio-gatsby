const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlog {
          edges {
            node {
              postSlug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsBlog.edges.map(({ node: post }) => {
        createPage({
          path: `blog/${post.postSlug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.postSlug,
          },
        });
      });
      resolve();
    });
  });
};
