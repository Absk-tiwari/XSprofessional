import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { SingleProduct } from './SingleProduct/SingleProduct';
import { NoProduct } from './SingleProduct/NoProduct';

export const Products = ({ products }) => {

    const { cart, setCart, wishlist, setWishlist } = useContext(CartContext);
    const handleAddToCart = (id) => {
        const newProduct = products?.find((pd) => pd.id === id);
        localStorage.setItem('xscart',JSON.stringify([...cart, { ...newProduct, quantity: 1 }]))
        setCart([...cart, { ...newProduct, quantity: 1 }]);
    };

    const handleWishlisting = id => {
        const newProduct = products.find( pd => pd.id === id)
        if(!wishlist.find( p => p.id === id)) {
            localStorage.setItem("xswishlist", JSON.stringify([...wishlist,{ ...newProduct }]))
            setWishlist([...wishlist, {...newProduct}])
        }
    }

  return (
    <>
      {products.length ? products.map((product) => (
        <SingleProduct
          addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
          key={product.id}
          product={product}
          onAddToWish={handleWishlisting}
          onAddToCart={handleAddToCart}
        />
      )): <NoProduct />}
    </>
  );
};
