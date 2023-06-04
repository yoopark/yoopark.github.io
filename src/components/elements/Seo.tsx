import { graphql, useStaticQuery } from 'gatsby';

type SeoProps = {
  title?: string;
  description?: string;
} & React.PropsWithChildren;

export const Seo = ({ title, description, children }: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <>
      <title>
        {defaultTitle
          ? title
            ? `${title} | ${defaultTitle}`
            : defaultTitle
          : title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};
