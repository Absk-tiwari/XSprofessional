import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_PATH_PREFIX}/assets/img/discount-bg.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Discount</span>
            <span className='main-text'>
              Get Upto <span>50%</span> Off On Your Hair Goals
            </span>
            <p>
              Ready to transform your hair game? Now’s the time!
            </p>
            <p className='p-2'>Enjoy <b>discounts</b> on our top-rated hair care range – from strengthening serums to deep-repair masks, made with safe, toxin-free ingredients.</p>

            <p>
                <b>Shine. Strength. Style</b>
            </p>

            <Link href='/shop'>
              <a className='btn'>get now!</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
