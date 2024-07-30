import React from 'react';

const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`flex w-screen justify-center ${className}`}>
      <div className='w-full max-w-6xl'>{children}</div>
    </section>
  );
};

export default Section;
