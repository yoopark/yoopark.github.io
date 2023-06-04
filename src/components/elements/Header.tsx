import { Link } from 'gatsby';

export const Header = () => {
  return (
    <header className="w-full flex justify-center items-center py-16">
      <Link to="/">
        <h1 className="text-xl font-bold text-white bg-black select-none">
          &nbsp;1.01<sup>365</sup> = 37.8&nbsp;
        </h1>
      </Link>
    </header>
  );
};
