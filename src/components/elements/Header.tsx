import { Link } from 'gatsby';

export const Header = () => {
  return (
    <header className="w-full h-40 flex justify-center items-center">
      <Link to="/">
        <h1 className="text-2xl">🫠</h1>
      </Link>
    </header>
  );
};
