import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

export const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <GatsbyImage image={profileImage} alt="Profile Image" />;
};
