import { CartContext } from 'pages/_app';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';
import api from 'utils/api';
export const ReviewFrom = ({id}) => {
    const {appendReview} = useContext(CartContext)
    const [rating, setRating] = useState(0);

    const initialState = {
        rating:rating,
        name:"",
        email:"",
        content: "",
    }
    const [fields, setFields] = useState(initialState)
    const change = e => setFields({...fields, [e.target.name]:e.target.value })

    const handleRating = (rate) => {
        setRating(rate)
        setFields({...fields, rating: rate})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const {data} = await api.post(`/add-review/${id}`, fields)
        if(data.status) {
            toast.success(data.message)
            let reviewObj = {}
            reviewObj[id] = data.reviews
            appendReview(reviewObj)
        }
    }

  // Catch Rating value
  return (
    <>
      {/* <!-- Product Review Form --> */}
      <div className='product-detail__form post-comment__form'>
        <div className='subscribe-form__img'>
          <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/assets/img/subscribe-img.png'} />
        </div>
        <form onSubmit={handleSubmit}>
          <h4>leave a review</h4>
          <p>Your email address will not be published.</p>
          <div className='rating' data-id='rating_1'>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              fillColor='#cfc819'
              size='20px'
              emptyColor='#fff'
            />
          </div>
          <div className='box-field'>
            <input
              type='text'
              name='name'
              onChange={change}
              className='form-control'
              placeholder='Enter your name'
            />
          </div>
          <div className='box-field'>
            <input
              type='email'
              name='email'
              onChange={change}
              className='form-control'
              placeholder='Enter your email'
            />
          </div>
          <div className='box-field box-field__textarea'>
            <textarea
              name='content'
              onChange={change}
              className='form-control'
              placeholder='Enter your review'
            ></textarea>
          </div>
          <button type='submit' className='btn'>
            send
          </button>
        </form>
      </div>
    </>
  );
};
