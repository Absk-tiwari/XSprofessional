import Link from 'next/link';
import { placeholder } from 'data/data.header';
export const NoProduct = () => {
  return (
    <>
      {/* <!-- BEING NO PRODUCT ITEM --> */}
      <div className={`products-item`}>
        <div className={`products-item__img `}>
          <img src={placeholder.noProduct} className={`js-img`} alt='' />
        </div>
      </div>
    </>
  );
};
