const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
    query {
      allContentfulServicePost(sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            url
            title
            createdAt(formatString: "YYYY/MM/DD")
            description
            eyeCatch {
              gatsbyImageData
            }
            content {
              raw
            }
          }
        }
      }
    }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  };

  const servicePostTemplate = path.resolve(`./src/templates/ServicePostTemplate.tsx`);

  result.data.allContentfulServicePost.edges.forEach(({ node }) => {
    createPage({
      path: `/services/${node.url}`,
      component: servicePostTemplate,
      context: {
        post: node,
      }
    });
  });
};
