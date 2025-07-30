import { CookiesProvider } from 'react-cookie'
import { createContext, useEffect, useState } from 'react';
import '../styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from '../store';
export const AuthContext = createContext();
export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {

    const [ cart, setCart ] = useState([]);
    const [ wishlist, setWishlist ] = useState([]);

    const [ orderDetails, setOrderDetails ] = useState({})
    const [ reviews, appendReview ] = useState({})
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('xscart')??'[]'))
        setWishlist(JSON.parse(localStorage.getItem('xswishlist')??'[]'))
    },[])
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <Provider store={store}>
            <CookiesProvider>
                <AuthContext.Provider value={{ user, loading }}>
                    <CartContext.Provider value={{ cart, setCart, wishlist, setWishlist, orderDetails, setOrderDetails, reviews, appendReview }}>
                        <Component {...pageProps} />
                    </CartContext.Provider>
                </AuthContext.Provider>
            </CookiesProvider>
        </Provider>
    );
};

export default MyApp;
