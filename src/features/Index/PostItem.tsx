import type { PostFrontmatterType } from '@/types/PostItem';
import { Link } from 'gatsby';

type PostItemProps = PostFrontmatterType & { link: string };

export const PostItem = ({ title, date, link }: PostItemProps) => {
  return (
    <li className="vstack gap-1.5">
      <Link to={link}>
        <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
      </Link>
      <p className="text-sm">{date}</p>
    </li>
  );
};
