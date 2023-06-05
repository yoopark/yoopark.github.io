import { Link } from 'gatsby';

export const Header = () => {
  return (
    <header className="w-full h-32 center">
      <Link to="/">
        <h1 className="px-1 text-xl font-bold text-white transition bg-black select-none">
          1.01<sup>365</sup> = 37.8
        </h1>
      </Link>
    </header>
  );
};
