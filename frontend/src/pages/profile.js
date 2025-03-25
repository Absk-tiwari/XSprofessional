import { Profile } from 'components/Profile/Profile';
import { PublicLayout } from 'layout/PublicLayout';
import { useAuthGuard } from 'middleware/authGuard';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'My Profile',
    path: '/profile',
  },
];
const ProfilePage = () => {
  useAuthGuard()
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='My Profile'>
      <Profile />
    </PublicLayout>
  );
};

export default ProfilePage;
