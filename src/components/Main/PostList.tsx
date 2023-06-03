import type { PostType } from '@/types/PostItem';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { useEffect, useMemo, useState } from 'react';
import { PostItem } from './PostItem';

type PostListProps = {
  selectedCategory: string;
  posts: PostType[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

export const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const { ref, isVisible } = useInfiniteScroll();

  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostType[]>(
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
    [selectedCategory],
  );

  const postList = useMemo<PostType[]>(
    () => postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
    [count, selectedCategory],
  );

  useEffect(() => {
    if (!isVisible) return;

    setCount((value) => value + 1);
  }, [isVisible]);

  useEffect(() => setCount(1), [selectedCategory]);

  return (
    <div className="flex flex-col gap-6 max-w-screen-sm w-full m-auto">
      {postList.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} link="/" key={id} />
      ))}
      <div ref={ref} className="w-full h-1 bg-transparent"></div>
    </div>
  );
};
