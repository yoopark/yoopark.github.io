import { Link } from 'gatsby';

type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

export const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <ul className="h-32 gap-2 select-none hstack">
      {Object.entries(categoryList).map(([name, count]) => (
        <Link to={`/?category=${name}`} key={name}>
          <li
            className={`px-1 ${
              name === selectedCategory && 'bg-black text-white font-bold'
            }`}
          >
            {name}
            <sup>({count})</sup>
          </li>
        </Link>
      ))}
    </ul>
  );
};
