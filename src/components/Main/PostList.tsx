import type { PostListItemType } from '@/types/PostItem';
import { PostItem } from './PostItem';

type PostListProps = {
  posts: PostListItemType[];
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-screen-sm w-full m-auto">
      {posts.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} link="https://yoopark.github.io" key={id} />
      ))}
    </div>
  );
};
