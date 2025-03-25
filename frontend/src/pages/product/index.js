import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ProductDetails } from 'components/Product/ProductDetails/ProductDetails';
import {PublicLayout} from 'layout/PublicLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'Product',
    path: '/product',
  },
];
const ProductPage = () => {
  const router = useRouter();
  const {id} = router.query
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
      {id ? <ProductDetails product={id} />: <ProductDetails />}
      <MostViewed additionalClass={id? 'product-viewed':''}/>
    </PublicLayout>
  );
};

export default ProductPage;
