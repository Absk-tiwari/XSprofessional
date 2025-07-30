import { Treatment } from 'components/Treatment/Treatment';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Blog',
    path: '/treatment',
  },
];
const BlogPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Blog'>
      <Treatment />
      <Subscribe />
    </PublicLayout>
  );
};

export default BlogPage;
