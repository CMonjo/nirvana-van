import React from 'react';

const Section = ({
  children,
  className = '',
  innerClassName = '',
  topoBackground = false,
  imageBackground = '/bg_topo.png',
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  topoBackground?: boolean;
  imageBackground?: string;
}) => {
  return (
    <section
      className={`relative flex w-screen justify-center ${className}`}
      style={{
        backgroundImage: topoBackground ? `url(${imageBackground})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`w-full max-w-6xl ${innerClassName}`}>{children}</div>
    </section>
  );
};

export default Section;
