type PostHeaderProps = {
  title: string;
  date: string;
  categories: string[];
};

export const PostHeader = ({ title, date, categories }: PostHeaderProps) => {
  return (
    <div className="justify-center w-full h-40 gap-5 vstack md:h-60">
      <h1 className="text-2xl font-extrabold text-center md:text-4xl">
        {title}
      </h1>
      <span>
        {date} / {categories.join(', ')}
      </span>
    </div>
  );
};
