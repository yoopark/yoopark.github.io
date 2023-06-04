import type { PostFrontmatterType } from '@/types/PostItem';
import { Link } from 'gatsby';

type PostItemProps = PostFrontmatterType & { link: string };

export const PostItem = ({ title, date, link }: PostItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <Link to={link}>
        <h3 className="text-2xl font-bold">{title}</h3>
      </Link>
      <p className="text-sm">{date}</p>
    </div>
  );
};
