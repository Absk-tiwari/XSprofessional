import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';
export const Info = () => {
  const videoStyle = {
    width: "100%",
    height: "auto",
    display: "block", 
    objectFit: "cover",
  }
  const url = '/assets/videos/promo.mp4'
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
          // style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img/products/1-fornt.png')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <img
                src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/products/1-fornt.png'}
                className='js-img'
                alt=''
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>Check This Out</span>
              <h2>new collection for delicate skin</h2>
              <span className='info-blocks__item-descr'>
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span>
              <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href='/shop'>
                <a className='btn'>
                  Shop now
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className='info-blocks__item info-blocks__item-reverse js-img'
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img/info-item-bg2.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              {/* <video src={process.env.NEXT_PUBLIC_BASE_PATH+url} /> */}
              <video width="100%" autoPlay muted loop style={videoStyle}>
                <source src={process.env.NEXT_PUBLIC_BASE_PATH+url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>Who we are</h2>
              <span className='info-blocks__item-descr'>
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span>
              <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href='/about'>
                <a className='info-blocks__item-link'>
                  <i className='icon-video'></i>
                  Watch video about us
                  <i className='icon-arrow-lg'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
