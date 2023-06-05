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
    <ul className="h-32 gap-2 select-none hstack">
      {Object.entries(categoryList).map(([name, count]) => (
        <li
          className={`px-1 cursor-pointer transition ${
            name === selectedCategory
              ? 'bg-black text-white font-bold'
              : 'hover:bg-slate-100'
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
