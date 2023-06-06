/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
  async ({ getConfig, actions }) => {
    const output = getConfig().output || {};

    actions.setWebpackConfig({
      output,
      resolve: {
        alias: {
          '@layouts': path.resolve(__dirname, 'src/components/layouts'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@features': path.resolve(__dirname, 'src/features'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@': path.resolve(__dirname, 'src'),
        },
      },
    });
  };

// Generate a Slug Each Post Data
export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, trailingSlash: false });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

// Generate Post Page Through Markdown Data
export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql<Queries.AllMarkdownDataQuery>(
    `
      query AllMarkdownData {
        allMarkdownRemark(
          sort: [
            { frontmatter: { date: DESC } }
            { frontmatter: { title: ASC } }
          ]
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/components/templates/PostTemplate.tsx',
  );

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data!.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields!.slug!; // FIXME: type assertion -> create graphql type

    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    };

    createPage(pageOptions);
  });
};
