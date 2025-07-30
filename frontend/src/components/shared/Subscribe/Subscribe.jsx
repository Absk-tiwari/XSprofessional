import { useState } from "react";
import toast from "react-hot-toast";
import api from "utils/api";

export const Subscribe = () => {
    const [subscribed, setSubscribe] = useState(false)
    const [email, setEmail] = useState("")
    const subscribe = async e => {
        e.preventDefault();
        const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        if(!isValid) return toast.error("Invalid email!")
        const {data} = await api.post('/newsletter', {email:email})
        if(data.status) {
            toast.success(data.message);
            setSubscribe(true)
        }
    }
  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className='subscribe'>
        <div className='wrapper'>
          <div className='subscribe-form'>
            <div className='subscribe-form__img'>
              <img
                src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/products/3.png'}
                className='js-img'
                alt=''
              />
            </div>
            {!subscribed ? <form onSubmit={subscribe}>
              <h3>Stay in touch</h3>
              <p>Nourish your skin with toxin-free cosmetic roducts.</p>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <button type='submit' className='btn'>
                  subscribe
                </button>
              </div>
            </form>: <button type='button' className='btn' style={{backgroundColor:'#d05278', borderRadius:10}}>
                Newsletter subscribed
            </button>}
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
