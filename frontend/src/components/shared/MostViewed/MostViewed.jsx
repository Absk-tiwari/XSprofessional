import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from 'utils/api';

export const MostViewed = ({ additionalClass }) => {
  const mostViewed = [...productData].slice(0, 6);
  const [mostViews, setMost] = useState(mostViewed)
  const {products} = useSelector(state => state.auth)
    useEffect(()=> {
        if(products && Object.keys(products).length){
            setMost(products)
        } else {
            api.get('/trending-products').then(({data})=> {
                setMost(data.data)
            })
        }
    },[])
  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          subTitle='Cosmetics'
          title='You Have Viewed'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />
        <div className='products-items'>
          <ProductsCarousel products={mostViews} />
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
