import Typography from '../atoms/typography';

const CardList = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <div className='flex flex-1 flex-col rounded-3xl bg-grey p-8'>
      <Typography variant='h3' className='mb-6 font-medium'>
        {title}
      </Typography>
      <div className='flex flex-col gap-2'>
        {list.map((item, index) => (
          <div key={index} className='flex flex-col gap-3'>
            <hr />
            <Typography variant='body1'>{item}</Typography>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default CardList;
