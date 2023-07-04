import type { PostListItemType } from '@/types/PostItem';
import { Seo } from '@components/elements/Seo';
import { CategoryList } from '@features/Index/CategoryList';
import { Introduction } from '@features/Index/Introduction';
import { PostList } from '@features/Index/PostList';
import { MainLayout } from '@layouts/MainLayout';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useEffect, useMemo, useState } from 'react';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
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

  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => setFade(true), []);

  return (
    <MainLayout>
      <div
        className={`flex flex-col md:flex-row gap-8 transition duration-500 ${
          !fade ? '-translate-y-5 opacity-0' : 'opacity-100'
        }`}
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
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`;
