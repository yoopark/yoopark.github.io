import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ProfileImage } from './ProfileImage';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

export const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <header className="w-full flex justify-center items-center pb-16">
      <ProfileImage profileImage={profileImage} />
    </header>
  );
};
