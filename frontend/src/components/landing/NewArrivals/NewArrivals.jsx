import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';
import { useEffect, useState } from 'react';
import { useGetNewArrivalsQuery } from 'services/api';

export const NewArrivals = () => {
  const newArrival = [...productData].filter(
    (arrival) => arrival.isNew === true
  );
  const [ products , setProducts] = useState([...newArrival]);
  const {data, isLoading, isSuccess} = useGetNewArrivalsQuery()
  useEffect(()=> {
    if(data?.data) {
        setProducts(data.data)
    }
  },[data, isSuccess])
  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          subTitle='Cosmetics'
          title='New arrivals'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />

        <div className='products-items'>
            <ProductsCarousel products={products} />
        </div>
      </section>
    </>
  );
};
