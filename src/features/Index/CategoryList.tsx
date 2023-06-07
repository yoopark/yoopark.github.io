type CategoryListProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categoryList: {
    [key: string]: number;
  };
};

export const CategoryList = ({
  selectedCategory,
  setSelectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <ul className="flex-wrap h-12 gap-2 m-auto my-8 select-none hstack whitespace-nowrap">
      {Object.entries(categoryList).map(([name, count]) => (
        <li
          key={name}
          className={`px-1 cursor-pointer ${
            name === selectedCategory
              ? 'bg-black text-white font-bold'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setSelectedCategory(name)}
        >
          {name}
          <sup>({count})</sup>
        </li>
      ))}
    </ul>
  );
};
