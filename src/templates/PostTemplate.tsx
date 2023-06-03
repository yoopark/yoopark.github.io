import type { PostPageItemType } from '@/types/PostItem';
import { PostContent } from '@features/Post/PostContent';
import { PostHeader } from '@features/Post/PostHeader';
import { MainLayout } from '@layouts/MainLayout';
import { graphql } from 'gatsby';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
};

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps) => {
  const {
    node: {
      html,
      frontmatter: { title, date, categories },
    },
  } = edges[0];
  return (
    <MainLayout>
      <PostHeader title={title} date={date} categories={categories} />
      <PostContent html={html} />
    </MainLayout>
  );
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
