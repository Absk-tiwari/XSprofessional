import { Treatments } from './Blogs/Treatments';
import blogData from 'data/blog/blog';
import { usePagination } from 'components/utils/Pagination/Pagination';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { useGetTransformationsQuery } from 'services/api';
import { useEffect, useState } from 'react';

export const Treatment = () => {

    const { data, isLoading } = useGetTransformationsQuery();
    const blogs = [...blogData];
    const [ transformations, setTransformations ] = useState( data?.data? data.data: [...blogs]);

    useEffect(()=> {
        if(data?.length){
            setTransformations(data)
        }
    },[data])

    const paginate = usePagination(transformations, 3);

  return (
    <>
      <div className='blog'>
        <div className='wrapper'>
          <Treatments treatments={paginate?.currentData()} loading={isLoading}/>
        </div>
        <PagingList paginate={paginate} />
      </div>
    </>
  );
};
