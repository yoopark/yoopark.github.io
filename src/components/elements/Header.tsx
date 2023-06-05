import { Link } from 'gatsby';

export const Header = () => {
  return (
    <header className="w-full h-32 center">
      <Link to="/">
        <h1 className="text-xl font-bold text-white transition bg-black select-none hover:bg-blue-500 active:bg-blue-700">
          &nbsp;1.01<sup>365</sup> = 37.8&nbsp;
        </h1>
      </Link>
    </header>
  );
};
