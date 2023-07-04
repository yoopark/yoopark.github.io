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
    <ul className="flex flex-col w-40 gap-0.5 select-none">
      {Object.entries(categoryList).map(([name, count]) => (
        <li
          key={name}
          className={`px-2 cursor-pointer ${
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
