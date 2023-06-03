import { Footer } from '@components/elements/Footer';
import { Header } from '@components/elements/Header';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
