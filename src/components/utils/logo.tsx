import Image from 'next/image';

export default function Logo({
  color = 'black',
}: {
  color?: 'white' | 'black';
}) {
  const width = 268 / 3;
  const height = 61 / 3;

  return (
    <Image
      src={`/logo_${color}.svg`}
      width={width}
      height={height}
      className='w-40'
      alt='Nirvana Van Logo'
    />
  );
}
