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
    <div className="w-full flex justify-center gap-2">
      {Object.entries(categoryList).map(([name, count]) => (
        <Link to={`/?category=${name}`} key={name} className="flex">
          <div
            className={`${
              name === selectedCategory &&
              'bg-black text-white font-bold selection:text-black'
            }`}
          >
            &nbsp;{name}
            <sup>({count})</sup>&nbsp;
          </div>
        </Link>
      ))}
    </div>
  );
};
