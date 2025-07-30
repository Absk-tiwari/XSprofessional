import Link from 'next/link';

export const Banner = () => {
    const mainBG = process.env.NEXT_PUBLIC_BASE_PATH + "/assets/img/main-bg.jpg"
    console.log(mainBG)
  return (
    <>
      <div className='main-block load-bg' style={{ backgroundImage: `url(${mainBG})` }}>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text'>Professional</span>
            <h1 className='main-text'>Beauty &amp; Care</h1>
            <p>
            <b>Because beautiful hair is always in style.</b>
            </p>
            <p>
                Indulge in our toxin-free, salon-grade haircare range made to nourish, repair, and style your strands with love.
            </p>

            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
        <img
          className='main-block__decor'
          src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/main-block-decor.png'}
          alt=''
        />
      </div>
    </>
  );
};
