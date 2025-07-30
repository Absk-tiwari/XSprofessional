import Link from 'next/link';

export const Card = ({ treat, loading }) => {
    // const { title, id, image, shortDescription, date } = treat;
    const image= loading? treat.image: treat.before_image_path;
    const id = treat.id
    const description = loading? treat.shortDescription: treat.description;
    const month = loading? treat.date.month : (treat?.created_at)?.split('-')[1]
    const date = loading? treat.date.date : (treat?.created_at)?.split('-')[0]
    const title='';
  return (
    <>
        <div className={"row w-100"}>
            <div className='blog-item before'>
                <Link href={`javascript:void(0)`}>
                    <a className='blog-item__img'>
                        <img src={process.env.NEXT_PUBLIC_ASSET_URL + image} className='js-img' alt='' />
                        <span className='blog-item__date'>
                            <span>{month}</span> {date}
                        </span>
                        <span className='blog-item__date' style={{left:'5%',top:"45%"}}>
                            <span>Before</span>
                        </span>
                    </a>
                </Link>
                <Link href={`javascript:void(0)`}>
                    <a className='blog-item__title'>{title}</a>
                </Link>
            </div>
            {!loading? <div className='blog-item after'>
                <Link href={`javascript:void(0)`}>
                    <a className='blog-item__img'>
                        <img src={process.env.NEXT_PUBLIC_ASSET_URL + treat.after_image_path} className='js-img' alt='' />
                        <span className='blog-item__date'>
                            <span>{month}</span> {date}
                        </span>
                        <span className='blog-item__date' style={{right:'5%',top:"45%"}}>
                            <span>After</span>
                        </span>
                    </a>
                </Link>
                <Link href={`javascript:void(0)`}>
                    <a className='blog-item__title'>{title}</a>
                </Link>
                <Link href={`/treatment?id?=${id}`}>
                    <a className='blog-item__link'>
                    Read more <i className='icon-arrow-md'></i>
                    </a>
                </Link>
            </div> :null}
                <div>
            </div>
        </div>
        <p>{treat.description}</p>
    </>
  );
};
