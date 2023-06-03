import type { PostType } from '@/types/PostItem';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { PostItem } from './PostItem';

type PostListProps = {
  selectedCategory: string;
  posts: PostType[];
};

export const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-6 max-w-screen-sm w-full m-auto"
    >
      {postList.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} link="/" key={id} />
      ))}
    </div>
  );
};
