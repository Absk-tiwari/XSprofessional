import {
  SlickArrowPrev,
  SlickArrowNext,
} from 'components/utils/SlickArrows/SlickArrows';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import Slider from 'react-slick';
import { SingleProduct } from './SingleProduct/SingleProduct';
import { placeholder } from 'data/data.header';

export const ProductsCarousel = ({ products, loading=false }) => {
    console.log(products)
    const { cart, setCart } = useContext(CartContext);
    const { wishlist, setWishlist } = useContext(CartContext);

    const handleAddToCart = (id) => {
        const newProduct = products?.find((pd) => pd.id === id);
        localStorage.setItem('xscart',JSON.stringify([...cart, { ...newProduct, quantity: 1 }]))
        setCart([...cart, { ...newProduct, quantity: 1 }]);
    };

    const handleWishlisting = id => {
        const newProduct = products.find( pd => pd.id === id)
        if(!wishlist.find( pd => pd.id === id)) {
            localStorage.setItem("xswishlist", JSON.stringify([...wishlist,{ ...newProduct }]))
            setWishlist([...wishlist, {...newProduct}])
        }
    }
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    {loading ?
    <Slider {...settings}>

        <SingleProduct
            addedInCart={Boolean(cart?.find((pd) => pd.id === '0'))}
            key={'loader.key'}
            product={{noProduct:false, oldPrice:true, image:placeholder.img, key: 14292 }}
            onAddToCart={handleAddToCart}
        />
        <SingleProduct
            addedInCart={Boolean(cart?.find((pd) => pd.id === '0'))}
            key={'loader.keyf'}
            product={{noProduct:false, oldPrice:true, image:placeholder.img, key: 14292 }}
            onAddToCart={handleAddToCart}
        />
        <SingleProduct
            addedInCart={Boolean(cart?.find((pd) => pd.id === '0'))}
            key={'loader.dkey'}
            product={{noProduct:false, oldPrice:true, image:placeholder.img, key: 14292 }}
            onAddToCart={handleAddToCart}
        />

    </Slider>
    : (products.length!==0 ?
      <Slider {...settings}>
        {products.map((product) => (
          <SingleProduct
            addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
            key={product.id}
            product={product}
            onAddToWish={handleWishlisting}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Slider>
      :
      <Slider {...settings}>
        {
          <SingleProduct
            addedInCart={false}
            key={'product_id'}
            onAddToWish={handleWishlisting}
            product={{noProduct:true,image:placeholder.noProduct}}
            onAddToCart={handleAddToCart}
          />
        }
      </Slider>)}
    </>
  );
};
