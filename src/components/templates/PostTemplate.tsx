import type { PostPageItemType } from '@/types/PostItem';
import { Seo } from '@components/elements/Seo';
import { GiscusWidget } from '@features/Post/GiscusWidget';
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
      <div className={`transition duration-500 animate-left`}>
        <PostHeader title={title} date={date} categories={categories} />
        <PostContent html={html} />
        <GiscusWidget />
      </div>
    </MainLayout>
  );
};

export default PostTemplate;

export const Head = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps) => {
  const {
    node: {
      frontmatter: { title },
    },
  } = edges[0];

  return <Seo title={title} />;
};

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, yyyy")
            categories
          }
        }
      }
    }
  }
`;
