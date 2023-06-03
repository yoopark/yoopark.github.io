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
    <div className="w-full h-24 flex items-center justify-center gap-4">
      {Object.entries(categoryList).map(([name, count]) => (
        <Link to={`/?category=${name}`} key={name} className="flex">
          <div className={`${name === selectedCategory && 'font-bold'}`}>
            {name}
            <span className="text-xs align-super">({count})</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
