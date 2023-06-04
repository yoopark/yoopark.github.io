type PostContentProps = {
  html: string;
};

export const PostContent = ({ html }: PostContentProps) => {
  return (
    <div
      className="w-full flex flex-col markdown-renderer mb-28"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
