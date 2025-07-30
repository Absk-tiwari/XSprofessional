import brandData from 'data/brand/brandlogo';

export const BrandLogo = () => {
  const brandLoges = [...brandData];
  return (
    <>
      {/* <!-- BEGIN LOGOS --> */}
      <div className='main-logos'>
        {brandLoges.map((logo, index) => (
          <a key={index} href={logo.URL}>
            <img src={process.env.NEXT_PUBLIC_PATH_PREFIX+logo.logoSrc} className='js-img' alt='' />
          </a>
        ))}
      </div>
      {/* <!-- LOGOS EOF   --></img> */}
    </>
  );
};
