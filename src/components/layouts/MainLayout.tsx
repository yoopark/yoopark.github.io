import { Footer } from '@components/elements/Footer';
import { Header } from '@components/elements/Header';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col max-w-screen-sm w-full m-auto items-center">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};
