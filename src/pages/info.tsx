import Text from '@/components/Text';
import { graphql } from 'gatsby';
type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPageProps) => {
  return (
    <div className="font-bold underline">
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
