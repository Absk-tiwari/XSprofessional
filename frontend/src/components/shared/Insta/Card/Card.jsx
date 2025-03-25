export const Card = ({ insta }) => {
  const { image, link } = insta;
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTO CARD --> */}

      <a href={link} className='insta-photo'>
        <img src={process.env.NEXT_PUBLIC_BASE_PATH+image} className='js-img' alt='' />
        <div className='insta-photo__hover'>
          <i className='icon-insta'></i>
        </div>
      </a>

      {/* <!-- INSTA PHOTOS EOF --> */}
    </>
  );
};
