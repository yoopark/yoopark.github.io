type PostHeaderProps = {
  title: string;
  date: string;
  categories: string[];
};

export const PostHeader = ({ title, date, categories }: PostHeaderProps) => {
  return (
    <div className="flex flex-col justify-center w-full gap-5 pl-8 my-10 border-l-4">
      <div className="flex gap-2">
        {categories.map((category) => (
          <span
            className="px-3 py-0.5 text-sm text-gray-600 border-[1px] rounded-xl border-gray-400 select-none"
            key={category}
          >
            {category}
          </span>
        ))}
      </div>
      <h1 className="text-2xl font-extrabold md:text-3xl">{title}</h1>
      <span className="text-sm">{date}</span>
    </div>
  );
};
