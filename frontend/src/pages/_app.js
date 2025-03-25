import { CookiesProvider } from 'react-cookie'
import { createContext, useEffect, useState } from 'react';
import '../styles/styles.scss';

export const AuthContext = createContext();
export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('xscart')??'[]'))
  },[])
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  return (
    <CookiesProvider>
    <AuthContext.Provider value={{ user, loading }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </AuthContext.Provider>
    </CookiesProvider>
  );
};

export default MyApp;
