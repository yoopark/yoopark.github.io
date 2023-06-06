import type { PostFrontmatterType } from '@/types/PostItem';
import { Link } from 'gatsby';

type PostItemProps = PostFrontmatterType & { link: string };

export const PostItem = ({ title, date, link }: PostItemProps) => {
  return (
    <div className="vstack gap-1.5">
      <Link to={link}>
        <p className="text-xl text-center font-bold md:text-2xl">{title}</p>
      </Link>
      <p className="text-sm">{date}</p>
    </div>
  );
};
