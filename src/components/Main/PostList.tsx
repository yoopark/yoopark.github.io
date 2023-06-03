import type { PostType } from '@/types/PostItem';
import { useMemo } from 'react';
import { PostItem } from './PostItem';

type PostListProps = {
  selectedCategory: string;
  posts: PostType[];
};

export const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory, posts],
  );
  return (
    <div className="flex flex-col gap-6 max-w-screen-sm w-full m-auto">
      {postListData.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} link="/" key={id} />
      ))}
    </div>
  );
};
