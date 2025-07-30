import { useContext, useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { CartContext } from 'pages/_app';

export const Reviews = ({ reviews, id }) => {
    const [ showAll ,setShowAll] = useState(false)
    const { reviews:updatedReviews } = useContext(CartContext)
    const [ reviewsToShow, setReviews ] = useState(reviews)

    useEffect(() => {
        if(Object.keys(updatedReviews)?.length && updatedReviews[id]?.length) {
            setReviews(updatedReviews[id])
        }
    },[updatedReviews])
  return (
    <>
      <div className='product-detail__items'>
        { reviewsToShow && reviewsToShow.slice(0, !showAll? 3 : reviewsToShow.length ).map((review, index) => (
          <Card key={index} review={review} />
        ))}
        <a href='#' className='blog-item__link' onClick={()=>setShowAll(!showAll)}>
          show {!showAll? 'more': 'less'} <i className='icon-arrow-md'></i>
        </a>
      </div>
    </>
  );
};
