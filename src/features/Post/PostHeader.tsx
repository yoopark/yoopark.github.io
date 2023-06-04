type PostHeaderProps = {
  title: string;
  date: string;
  categories: string[];
};

export const PostHeader = ({ title, date, categories }: PostHeaderProps) => {
  return (
    <div className="w-full h-60 max-w-screen-sm m-auto flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-extrabold text-center">{title}</h1>
      <p>
        {date} / {categories.join(', ')}
      </p>
    </div>
  );
};
