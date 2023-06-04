import { MainLayout } from '@layouts/MainLayout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="gap-5 vstack">
        <h1 className="text-2xl font-black">Not Found</h1>
        <Link to="/">
          <p className="text-sm">Home</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
