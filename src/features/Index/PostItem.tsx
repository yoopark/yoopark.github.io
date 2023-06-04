import type { PostFrontmatterType } from '@/types/PostItem';
import { Link } from 'gatsby';

type PostItemProps = PostFrontmatterType & { link: string };

export const PostItem = ({ title, date, link }: PostItemProps) => {
  return (
    <Link to={link} className="flex flex-col items-center gap-1.5">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm">{date}</p>
    </Link>
  );
};
