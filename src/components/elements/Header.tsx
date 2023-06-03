import { Link } from 'gatsby';

export const Header = () => {
  return (
    <div className="w-full h-28 flex justify-center items-center">
      <Link to="/">
        <h1 className="text-2xl">🫠</h1>
      </Link>
    </div>
  );
};
