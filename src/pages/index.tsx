import { Footer } from '@/components/Common/Footer';
import { CategoryList } from '@/components/Main/CategoryList';
import { Introduction } from '@/components/Main/Introduction';
import { PostList } from '@/components/Main/PostList';
import type { PostListItemType } from '@/types/PostItem';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
};

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: { [key: string]: number },
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach((category) => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });
          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <div className="flex flex-col h-full">
      <Introduction />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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
