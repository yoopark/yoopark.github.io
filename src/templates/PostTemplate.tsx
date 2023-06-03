import { graphql } from 'gatsby';

type PostTemplateProps = {};

const PostTemplate = (props: PostTemplateProps) => {
  console.log(props);

  return <div> Post Template</div>;
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "YYYYMMDD")
            categories
          }
        }
      }
    }
  }
`;
