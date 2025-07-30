import { CartContext } from 'pages/_app';
import { useContext, useState } from 'react';
import Dropdown from 'react-dropdown';
import toast from "react-hot-toast";
import api from 'utils/api';
import { capitalFirst } from 'utils/functions';

const countries = [
  { label: 'Country 1', value: '1' },
  { label: 'Country 2', value: '2' },
];
export const CheckoutStep1 = ({ onNext }) => {
  const { cart,setCart, setOrderDetails } = useContext(CartContext);
  const items = []
  cart.forEach(a =>{
      let obj = {
        id: a.id,
        name: a.name,
        price: a.price * a.quantity,
        quantity: a.quantity
      }
      items.push(obj)
  })
  const total = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );
  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      deliveryaddress: "",
      email: "",
      city: "",
      payment_method: "COD",
      orderItems:items,
      total,
    });
    const [status, setStatus] = useState(""); // Success/Error message
    // Handle input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            for (let key in formData) {
                if (formData[key]=== ""){
                    return toast.error(capitalFirst(key) + " is empty");
                }
                if(key ==='email') {
                    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData[key])
                    if(!isValid) return toast.error("Invalid email!")
                }
                if(key==='phone') {
                    const isValid = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/.test(formData[key]);
                    if(!isValid) return toast.error("Invalid phone number");
                }
            }

            const {data} = await api.post('/orders/create', formData);
            // const response = await api.post("/api/place-order", formData);

            if (data.status) {
                setOrderDetails(data.orderDetails);
                toast.success("Ordered placed successfully!");
                localStorage.removeItem('xscart')
                setCart([])
                onNext()
            } else {
                toast.error("Failed to place order!");
            }
        } catch (error) {
            console.log(error)
            toast.error("An error occurred. Please try again.");
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onSubmit={handleSubmit}>
          <div className='checkout-form__item'>
            <h4>Info about you</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Enter your phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter your mail'
                  onChange={handleChange}
                  value={formData.email}
                  name='email'
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Delivery Info</h4>

            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter the city'
                  value={formData.city}
                  onChange={handleChange}
                  name='city'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter the full address'
                  value={formData.address}
                  onChange={handleChange}
                  name='deliveryaddress'
                />
              </div>
            </div>

          </div>

          <div className='checkout-buttons'>

            <button className='btn btn-icon btn-next'>
              place order
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};
