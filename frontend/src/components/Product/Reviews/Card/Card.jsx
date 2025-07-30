import { placeholder } from "data/data.header";

export const Card = ({ review }) => {
  const { info:author, created_at:reviewDate, rating, content } = review;
  return (
    <>
      {/* Being Product Review */}
      <div className='review-item'>
        <div className='review-item__head'>
          <div className='review-item__author'>
            <img src={placeholder.profile} className='js-img' alt='' />
            <span className='review-item__name'>{author.name}</span>
            <span className='review-item__date'>{reviewDate}</span>
          </div>
          <div className='review-item__rating'>
            <ul className='star-rating'>
              {Array(Number(rating)).fill('a').map((star, index) => {
                return (
                  <li key={index}>
                    <i className='icon-star'></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='review-item__content'>{content}</div>
      </div>
    </>
  );
};
