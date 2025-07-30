import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import socialData from 'data/social';
import { Reviews } from '../Reviews/Reviews';
import { ReviewFrom } from '../ReviewForm/ReviewFrom';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import api from 'utils/api';
import { useSelector } from 'react-redux';

export const ProductDetails = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const socialLinks = [...socialData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);
  const {products:stateProducts, settings } = useSelector(state => state.auth)

  useEffect(() => {
    if (router.query.id) {
        let viewed = JSON.parse(localStorage.getItem('xs_viewed')??'[]');
        if(viewed.indexOf(router.query.id)===-1) {
            viewed.push(router.query.id)
            localStorage.setItem('xs_viewed', JSON.stringify(viewed))
        }
        const data = stateProducts? stateProducts.find((pd) => pd.id === parseInt(router.query.id)): null;
        if(!data){
            api.get(`/product/${router.query.id}`).then(({data:response})=> setProduct(response.data))
        } else {
            setProduct(data);
        }
    }
  }, [router.query.id]);

  useEffect(() => {
    if (product) {
        setAddedInCart(Boolean(cart?.find((pd) => pd.id === product.id)));
    }
  }, [product, cart]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    setCart([...cart, newProduct]);
  };

  if (!product) return <p>Loading...</p>;
  return (
    <>
      <div className='product'>
        <div className='wrapper'>
          <div className='product-content'>
            <div className='product-slider'>
              <div className='product-slider__main'>
                <Slider
                    fade={true}
                    asNavFor={nav2}
                    arrows={false}
                    lazyLoad={true}
                    ref={(slider1) => setNav1(slider1)}
                >
                  {product.imageGallery?.length ? product.imageGallery.map((img, index) => (
                    <div key={index} className='product-slider__main-item'>
                      <img src={img} alt='product' />
                    </div>
                  )): <div className='product-slider__main-item'>
                  <img src={process.env.NEXT_PUBLIC_ASSET_URL + '/placeholder.png'} alt='product' />
                </div>}
                </Slider>
              </div>
              <div className='product-slider__nav'>
                <Slider
                  arrows={false}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {product.imageGallery.map((img, index) => (
                    <div key={index} className='product-slider__nav-item'>
                      <img src={img} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              {product.isStocked ? (
                <span className='product-stock'>in stock</span>
              ) : (
                ''
              )}

              <span className='product-num'>SKU: {product.productNumber}</span>
              {product.oldPrice ? (
                <span className='product-price'>
                  <span>&#8377;{product.oldPrice}</span>&#8377;{product.price}
                </span>
              ) : (
                <span className='product-price'>&#8377;{product.price}</span>
              )}
              <p>{product.content}</p>
              <div className='contacts-info__social'>
                <span>Find us here:</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path}>
                        <i className={social.icon ? social.icon : ''}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='product-options'>
                <div className='product-info__quantity'>
                  <span className='product-info__quantity-title'>
                    Quantity:
                  </span>
                  <div className='counter-box'>
                    <span
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className='counter-link counter-link__prev'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                    <input
                      type='text'
                      className='counter-input'
                      disabled
                      value={quantity}
                    />
                    <span
                      onClick={() => setQuantity(quantity + 1)}
                      className='counter-link counter-link__next'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='product-buttons'>
                <button
                  disabled={addedInCart}
                  onClick={() => handleAddToCart()}
                  className='btn btn-icon'
                >
                  <i className='icon-cart'></i> cart
                </button>
                <button className='btn btn-grey btn-icon'>
                  <i className='icon-heart'></i> wish
                </button>
              </div>
            </div>
          </div>
          <div className='product-detail'>
            <div className='tab-wrap product-detail-tabs'>
              <ul className='nav-tab-list tabs pd-tab'>
                <li
                  className={tab === 1 ? 'active' : ''}
                  onClick={() => setTab(1)}
                >
                  Description
                </li>
                <li
                  className={tab === 2 ? 'active' : ''}
                  onClick={() => setTab(2)}
                >
                  Reviews
                </li>
              </ul>
              <div className='box-tab-cont'>
                {tab === 1 && (
                  <div className='tab-cont'>
                    <p>{product.description}</p>
                    <p>{product.description}</p>
                  </div>
                )}

                {tab === 2 && (
                  <div className='tab-cont product-reviews'>
                    <Reviews reviews={product.reviews} id={product.id}/>
                    {settings?.allowReview==='yes' ? <ReviewFrom id={product.id} />: null }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/promo-video__decor.jpg'}
          alt=''
        />
      </div>
    </>
  );
};
