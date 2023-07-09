import type { PostListItemType } from '@/types/PostItem';
import { Seo } from '@components/elements/Seo';
import { CategoryList } from '@features/Index/CategoryList';
import { PostList } from '@features/Index/PostList';
import { MainLayout } from '@layouts/MainLayout';
import { graphql } from 'gatsby';
import { useMemo, useState } from 'react';

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
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
    <MainLayout>
      <div
        className={`flex flex-col md:flex-row gap-8 transition duration-500 animate-top`}
      >
        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categoryList={categoryList}
        />
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

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
            date(formatString: "MMMM DD, YYYY")
            categories
          }
        }
      }
    }
  }
`;
