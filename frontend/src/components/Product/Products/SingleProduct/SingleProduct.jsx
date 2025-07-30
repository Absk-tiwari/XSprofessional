import Link from 'next/link';
import { placeholder } from 'data/data.header';
export const SingleProduct = ({
  product,
  onAddToWish,
  onAddToCart,
  addedInCart,
}) => {
  const { name, oldPrice, price, image, isSale, isNew, id, noProduct } = product;
  return (
    <>
      <div className={`products-item ${oldPrice? 'placeholder-glow':''}`}>
        {!oldPrice? <div className='products-item__type'>
          {isSale && <span className='products-item__sale'>sale</span>}
          {isNew ? <span className='products-item__new'>new</span>: null}
        </div>: null}
        <div className={`products-item__img`}>
          <img src={oldPrice? process.env.NEXT_PUBLIC_PATH_PREFIX+placeholder.img :image + '?sdf'} className={`js-img ${oldPrice?'placeholder':''}`} style={{objectFit:oldPrice || image.indexOf('placeholder') !== -1 ?'cover':'contain'}} alt='' />
          {!oldPrice? <div className='products-item__hover'>
            { noProduct?
             null: <>
                <Link href={`/product?id=${id}`}>
                    <a><i className='icon-search'/></a>
                </Link>
                <div className='products-item__hover-options'>
                    <button className='addList' onClick={() => onAddToWish(id)}>
                        <i className='icon-heart' />
                    </button>
                    <button
                        disabled={addedInCart}
                        className={`addList ${addedInCart ? 'added' : ''}`}
                        onClick={() => onAddToCart(id)}
                    >
                        <i className='icon-cart' />
                    </button>
                </div>
                </>
            }
            </div>: null}
        </div>
        {!oldPrice? <div className='products-item__info'>
          <Link href={`/product?id=${id}`}>
            <a>
              <span>{name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
            <span>{oldPrice && `&#8377;${oldPrice}`}</span>
            {price? `₹${parseFloat(price).toFixed(2)}`: null }
          </span>
        </div>:
        <div className="placeholder-glow">
            <span className="placeholder products-item__cost col-7"></span>
            <span className="placeholder products-item__cost col-4"></span>
            <span className="placeholder products-item__cost col-4"></span>
            <span className="placeholder products-item__cost col-6"></span>
            <span className="placeholder products-item__cost col-8"></span>
        </div>
    }
      </div>
    </>
  );
};
