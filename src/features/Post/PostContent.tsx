type PostContentProps = {
  html: string;
};

export const PostContent = ({ html }: PostContentProps) => {
  return (
    <article
      className="flex flex-col w-full markdown-renderer"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
