import React from 'react';

const Section = ({
  children,
  className = '',
  topoBackground = false,
  backgroundImage = '/bg_topo.png',
}: {
  children: React.ReactNode;
  className?: string;
  topoBackground?: boolean;
  backgroundImage?: string;
}) => {
  console.log(backgroundImage);

  return (
    <section
      className={`flex w-screen justify-center ${className}`}
      style={{
        backgroundImage: topoBackground ? `url(/bento-6.png)` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full max-w-6xl'>{children}</div>
    </section>
  );
};

export default Section;
