type PostHeaderProps = {
  title: string;
  date: string;
  categories: string[];
};

export const PostHeader = ({ title, date, categories }: PostHeaderProps) => {
  return (
    <div className="w-full h-32 max-w-screen-sm m-auto flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      {date} / {categories.join(', ')}
    </div>
  );
};
