import { Cart } from 'components/Cart/Cart';
import { PublicLayout } from 'layout/PublicLayout';
import { useAuthGuard } from 'middleware/authGuard';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Cart',
    path: '/cart',
  },
];
const CartPage = () => {
  // useAuthGuard()
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Cart'>
      <Cart />
    </PublicLayout>
  );
};

export default CartPage;
