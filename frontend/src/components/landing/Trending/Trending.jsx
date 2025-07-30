import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { useGetTrendingProductsQuery } from 'services/api';
import { useDispatch } from 'react-redux';
import { setTrending } from 'reducers/theReducer';
export const Trending = () => {

    const { data, isLoading } = useGetTrendingProductsQuery()
    const dispatch = useDispatch()
    const [trendingProducts, setTrendingProducts] = useState(data?.data? data.data: []);
    const [products, setProducts] = useState(data?.data? data.data: trendingProducts);
    const [filterItem, setFilterItem] = useState(null);

    useEffect(() => {
        if(data?.data){
          dispatch(setTrending(data.data))
          setTrendingProducts(data.data)
          setProducts(data.data)
        }
    },[data]);

    useEffect(() => {
        const newItems = trendingProducts.filter( pd => {
            if(filterItem) {
                return pd.category === filterItem
            }
            return pd
        });
        setProducts(newItems);
    },[filterItem]);

    const filterList = [
    {
      name: 'SPA',
      value: 'SPA',
    },
    {
      name: 'Skin Care',
      value: 'Skin Care',
    },
    {
      name: 'Hair Care',
      value: 'Hair Care',
    },
    {
      name: 'Treatment',
      value: 'Treatment',
    }
  ];
  return (
    <>
      <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            subTitle='Cosmetics'
            title='Trending products'
            body='Trending Hair Must-Haves – Because Your Hair Deserves the Best.Discover our bestselling hair care products designed to revive, protect, and beautify your strands'
          />
          <div className='tab-wrap trending-tabs'>
            <ul className='nav-tab-list tabs'>
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? 'active' : ''}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className='products-items'>
                <ProductsCarousel products={products} loading={isLoading}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
