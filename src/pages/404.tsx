import { MainLayout } from '@layouts/MainLayout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-black m-auto">Not Found</h1>
        <Link to="/">
          <p className="text-sm">Home</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
