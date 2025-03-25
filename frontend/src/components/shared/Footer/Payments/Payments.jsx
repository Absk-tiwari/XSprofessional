export const Payment = () => {
  return (
    <>
      <span>Payment methods:</span>
      <ul>
        <li>
          <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/payment1.png'} className='js-img' alt='' />
        </li>
        <li>
          <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/payment2.png'} className='js-img' alt='' />
        </li>
        <li>
          <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/payment3.png'} className='js-img' alt='' />
        </li>
        <li>
          <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/payment4.png'} className='js-img' alt='' />
        </li>
      </ul>
    </>
  );
};
