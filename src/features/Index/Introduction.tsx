import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ProfileImage } from './ProfileImage';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

export const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <div className="mb-20 center">
      <ProfileImage profileImage={profileImage} />
    </div>
  );
};
