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
  const url = process.env.NEXT_PUBLIC_BASE_PATH+'/assets/videos/promo.mp4'
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
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
              <h2>New Haircare Collection For Every Strand</h2>
              <span className='info-blocks__item-descr'>
                Give your hair the love it deserves with our toxin-free, deeply nourishing formulas.
                Unlock shine, strength, and smoothness—with offers too good to ignore.
              </span>
              <p>
                Experience the power of nature-backed ingredients crafted for healthier, happier hair. From root to tip, your transformation starts here.
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
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_PATH_PREFIX}/assets/img/info-item-bg2.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <video width="100%" autoPlay muted loop style={videoStyle}>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>Who we are</h2>
                <span className='info-blocks__item-descr'>
                    At XS XYTILES Studio Professional, we believe hair care should be clean, effective, and luxurious.
                </span>
              <p>
                That’s why we craft professional-grade formulas free from harsh toxins—so your hair feels stronger, shinier, and healthier with every use.
              </p>
              <p>
                Our mission? To empower salons, stylists, and individuals with high-performance hair solutions inspired by science and nature.
              </p>
              <p>Trusted by professionals.</p>
              <p>
                <b>Loved by hair</b>
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
