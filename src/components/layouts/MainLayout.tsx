import { Footer } from '@components/elements/Footer';
import { Header } from '@components/elements/Header';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full max-w-screen-sm px-5 m-auto md:px-0 vstack">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};
