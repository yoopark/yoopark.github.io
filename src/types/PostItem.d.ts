export type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
};

export type PostType = {
  node: {
    id: string;
    frontmatter: PostFrontmatterType;
  };
};
