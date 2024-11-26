import Typography from '@/components/atoms/typography';

const ConfiguratorCard = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-col gap-4 rounded-3xl bg-grey p-4'>{children}</div>
);

export const ConfiguratorCardTitle = ({ title }: { title: string }) => (
  <Typography variant='h3' className='font-light'>
    {title}
  </Typography>
);

export default ConfiguratorCard;
