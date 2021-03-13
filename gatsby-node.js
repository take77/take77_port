const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// create pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
    query {
      allContentfulGraphicPost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            url
            title
            createdAt(formatString: "YYYY/MM/DD")
            description
            eyeCatch {
              gatsbyImageData
              file {
                url
              }
            }
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  gatsbyImageData
                }
                ... on ContentfulHobbyPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulDevelopmentPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulGraphicPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulServicePost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulOtherPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
      allContentfulDevelopmentPost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            url
            title
            createdAt(formatString: "YYYY/MM/DD")
            description
            eyeCatch {
              gatsbyImageData
              file {
                url
              }
            }
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  gatsbyImageData
                }
                ... on ContentfulHobbyPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulDevelopmentPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulGraphicPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulServicePost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulOtherPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
      allContentfulServicePost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            url
            title
            createdAt(formatString: "YYYY/MM/DD")
            description
            eyeCatch {
              gatsbyImageData
              file {
                url
              }
            }
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  gatsbyImageData
                }
                ... on ContentfulHobbyPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulDevelopmentPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulGraphicPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulServicePost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulOtherPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
      allContentfulHobbyPost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            url
            title
            createdAt(formatString: "YYYY/MM/DD")
            description
            eyeCatch {
              gatsbyImageData
              file {
                url
              }
            }
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  gatsbyImageData
                }
                ... on ContentfulHobbyPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulDevelopmentPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulGraphicPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulServicePost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulOtherPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
      allContentfulOtherPost(filter: {url: {ne: "dummy"}}, sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            url
            title
            createdAt(formatString: "YYYY/MM/DD")
            description
            eyeCatch {
              gatsbyImageData
              file {
                url
              }
            }
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  gatsbyImageData
                }
                ... on ContentfulHobbyPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulDevelopmentPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulGraphicPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulServicePost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
                ... on ContentfulOtherPost {
                  contentful_id
                  __typename
                  url
                  title
                  description
                  eyeCatch {
                    gatsbyImageData
                  }
                }
              }
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

  result.data.allContentfulDevelopmentPost.edges.forEach(({ node }) => {
    createPage({
      path: `/developments/${node.url}`,
      component: CommonPostTemplate,
      context: {
        post: node,
      }
    });
  });

  result.data.allContentfulGraphicPost.edges.forEach(({ node }) => {
    createPage({
      path: `/graphics/${node.url}`,
      component: CommonPostTemplate,
      context: {
        post: node,
      }
    });
  });

  result.data.allContentfulHobbyPost.edges.forEach(({ node }) => {
    createPage({
      path: `/hobbies/${node.url}`,
      component: CommonPostTemplate,
      context: {
        post: node,
      }
    });
  });

  result.data.allContentfulOtherPost.edges.forEach(({ node }) => {
    createPage({
      path: `/others/${node.url}`,
      component: CommonPostTemplate,
      context: {
        post: node,
      }
    });
  });
};
