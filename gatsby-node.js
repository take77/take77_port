const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// create service post pages
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

  const CommonPostTemplate = path.resolve(`./src/templates/CommonPostTemplate.tsx`);

  result.data.allContentfulServicePost.edges.forEach(({ node }) => {
    createPage({
      path: `/services/${node.url}`,
      component: CommonPostTemplate,
      context: {
        post: node,
      }
    });
  });
};

// create hobby post pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
    query {
      allContentfulHobbyPost(sort: {order: DESC, fields: createdAt}) {
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

  const CommonPostTemplate = path.resolve(`./src/templates/CommonPostTemplate.tsx`);

  result.data.allContentfulHobbyPost.edges.forEach(({ node }) => {
    createPage({
      path: `/hobbies/${node.url}`,
      component: CommonPostTemplate,
      context: {
        post: node,
      }
    });
  });
};
