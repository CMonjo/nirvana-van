import React from 'react';

const Section = ({
  children,
  className = '',
  topoBackground = false,
}: {
  children: React.ReactNode;
  className?: string;
  topoBackground?: boolean;
}) => {
  return (
    <section
      className={`flex w-screen justify-center ${className}`}
      style={{
        backgroundImage: topoBackground ? 'url(/bg_topo.png)' : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full max-w-6xl'>{children}</div>
    </section>
  );
};

export default Section;
