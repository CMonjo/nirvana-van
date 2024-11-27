import Typography from '@/components/atoms/typography';
import clsx from 'clsx';

const ConfiguratorCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={clsx(
      'flex flex-col rounded-3xl bg-grey p-6',
      !className?.includes('gap-') && 'gap-4',
      className
    )}
  >
    {children}
  </div>
);

export const ConfiguratorCardTitle = ({ title }: { title: string }) => (
  <Typography variant='h3' className='font-light'>
    {title}
  </Typography>
);

export default ConfiguratorCard;
