import { Footer } from '@/components/Common/Footer';
import { CategoryList } from '@/components/Main/CategoryList';
import { Introduction } from '@/components/Main/Introduction';
import { PostList } from '@/components/Main/PostList';
import type { PostListItemType } from '@/types/PostItem';
import { graphql } from 'gatsby';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
};

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  return (
    <div className="flex flex-col h-full">
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
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
