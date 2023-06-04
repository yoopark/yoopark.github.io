type PostHeaderProps = {
  title: string;
  date: string;
  categories: string[];
};

export const PostHeader = ({ title, date, categories }: PostHeaderProps) => {
  return (
    <div className="justify-center w-full gap-5 vstack h-60">
      <h1 className="text-4xl font-extrabold text-center">{title}</h1>
      <span>
        {date} / {categories.join(', ')}
      </span>
    </div>
  );
};
