import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ProfileImage } from './ProfileImage';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

export const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <div className="w-full center">
      <ProfileImage profileImage={profileImage} />
    </div>
  );
};
