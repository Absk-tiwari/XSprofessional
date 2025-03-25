import router from 'next/router';
import { useState } from 'react';
import { getUser, login } from 'services/auth';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({email, password});
      if(data.token) {
        getUser().then(({data}) => console.log(data))
      }
      console.log("Login successful", data);
    } catch (err) {
      setError("Invalid credentials");
    }
  };
  return (
    <>
      {/* <!-- BEGIN LOGIN --> */}
      <div className='login'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img/login-form__bg.png')` }}
          >
            <form onSubmit={handleSubmit}>
              <h3>log in </h3>

              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter your email or nickname'
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className='box-field'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter your password'
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                Remember me
              </label>
              <button className='btn' type='submit'>
                log in
              </button>
              {error && <p>{error}</p>}
              <div className='login-form__bottom'>
                <span>
                  No account?{' '}
                  <a onClick={() => router.push('/registration')}>
                    Register now
                  </a>
                </span>
                <a href='#'>Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/promo-video__decor.jpg'}
          alt=''
        />
      </div>
      {/* <!-- LOGIN EOF   --> */}
    </>
  );
};
