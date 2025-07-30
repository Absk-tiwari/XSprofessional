import { Card } from './Card/Card';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from 'pages/_app';
import { placeholder } from 'data/data.header';

export const Wishlist = () => {
    const { wishlist, setWishlist } = useContext(CartContext);
    const [wishItems, setWishItems] = useState([]);

    const clearWishList = () => {
        localStorage.setItem('xswishlist', '[]');
        setWishlist([])
    }

    useEffect(() => {
        setWishItems(wishlist)
    },[wishlist])
  return (
    <>
      <div className='wishlist'>
        <div className='wrapper'>
            {wishItems.length===0 ? (<>
                <img src={placeholder.noProduct} className='js-img'/>
            </>) : (<>
            <div className='cart-table'>
                <div className='cart-table__box'>
                    <div className='cart-table__row cart-table__row-head'>
                        <div className='cart-table__col'>Product</div>
                        <div className='cart-table__col'>Price</div>
                        <div className='cart-table__col'>status</div>
                        <div className='cart-table__col'>Add to cart</div>
                    </div>

                    {wishItems.map((wish) => (
                    <Card key={wish.id} wish={wish} />
                    ))}
                </div>
            </div>
            </>)}

          <div className='wishlist-buttons'>
            {wishItems.length ? <a href='javascript:void(0)' className='btn btn-grey' onClick={clearWishList}>
              clear Wishlist
            </a> : null}
            <Link href='/shop'>
              <a className='btn'>go shopping</a>
            </Link>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          data-src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/promo-video__decor.jpg'}
          alt=''
        />
      </div>
      {/* <!-- WISHLIST EOF   --> */}
    </>
  );
};
