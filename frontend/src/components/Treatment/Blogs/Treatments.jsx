import { Card } from './Card/Card';

export const Treatments = ({ treatments, loading }) => {
  return (
    <>
      <div className='blog-items'>
        {treatments.map((item) => (
          <Card key={item.id} treat={item} loading={loading} />
        ))}
      </div>
    </>
  );
};
