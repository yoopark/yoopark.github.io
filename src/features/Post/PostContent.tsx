type PostContentProps = {
  html: string;
};

export const PostContent = ({ html }: PostContentProps) => {
  return (
    <div
      className="flex flex-col max-w-screen-sm m-auto markdown-renderer"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
