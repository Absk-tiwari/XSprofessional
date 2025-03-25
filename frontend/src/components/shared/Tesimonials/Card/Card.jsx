export const Card = ({ testimonial }) => {
  const { image, body, name } = testimonial;
  return (
    <>
      {/* <!-- BEING TESTIMONIALS SLIDE CARD --> */}
      <div className='testimonials-slide'>
        <p>{body}</p>
        <div className='testimonials-author'>
          <img src={process.env.NEXT_PUBLIC_BASE_PATH+image} className='js-img' alt='' />
          <h5>{name}</h5>
        </div>
      </div>
      {/* <!-- TESTIMONIALS SLIDE CARD EOF --> */}
    </>
  );
};
