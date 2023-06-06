type PostHeaderProps = {
  title: string;
  date: string;
  categories: string[];
};

export const PostHeader = ({ title, date, categories }: PostHeaderProps) => {
  return (
    <div className="justify-center w-full h-40 gap-5 vstack md:h-60">
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
      <h1 className="text-2xl font-extrabold text-center md:text-4xl">
        {title}
      </h1>
      <span className="text-sm">{date}</span>
    </div>
  );
};
