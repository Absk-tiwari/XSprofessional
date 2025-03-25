import axios from 'axios';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import { useState } from 'react';
import { register } from 'services/auth';
import api from 'utils/api';

export const Registration = () => {
  const [fields, setFields] = useState({
    fname:'',
    lname:'',
    password:'',
    repassword:'',
    email:"",
  });

  const change = e => {
    setFields({...fields, [e.target.name]:e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if(fields.password!== fields.repassword) {
      return alert("Passwords do not matched");
    }
    try {
      const {data} = await register(fields);
      if(data.status) {
        router.push('/login')
      }
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {/* <!-- BEGIN REGISTRATION --> */}
      <div className='login registration'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img/registration-form__bg.png')`,
            }}
          >
            <form onSubmit={handleSubmit}>
              <h3>register now</h3>
              <SocialLogin />

              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='text'
                    name='fname'
                    className='form-control'
                    placeholder='Enter first name'
                    defaultValue={fields.fname}
                    onChange={change}
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='text'
                    name='lname'
                    className='form-control'
                    placeholder='Enter your last name'
                    defaultValue={fields.lname}
                    onChange={change}
                  />
                </div>
              </div>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='tel'
                    className='form-control'
                    placeholder='Enter your phone'
                    name='phone'
                    defaultValue={fields.phone}
                    onChange={change}
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                    name='email'
                    defaultValue={fields.email}
                    onChange={change}
                  />
                </div>
              </div>
              <div className='box-field__row'>
                <span>password</span>
                <div className='box-field'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter your password'
                    name='password'
                    defaultValue={fields.password}
                    onChange={change}
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Confirm password'
                    name='repassword'
                    defaultValue={fields.repassword}
                    onChange={change}
                  />
                </div>
              </div>
              <button className='btn' type='submit'>
                registration
              </button>
              <div className='login-form__bottom'>
                <span>
                  Already have an account?{' '}
                  <a onClick={() => router.push('/login')}>Log in</a>
                </span>
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
      {/* <!-- REGISTRATION EOF   -->  */}
    </>
  );
};
