import type { PostFrontmatterType } from '@/types/PostItem';
import { Link } from 'gatsby';

type PostItemProps = PostFrontmatterType & { link: string };

export const PostItem = ({ title, date, categories, link }: PostItemProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Link to={link}>
        <p className="text-xl font-bold md:text-2xl">{title}</p>
      </Link>
      <div className="flex gap-3">
        <p className="text-sm text-gray-500">{date}</p>
        <div className="flex gap-2">
          {categories.map((category) => (
            <p
              key={category}
              className="px-2 text-sm text-gray-500 bg-gray-100 rounded-md"
            >
              {category}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
