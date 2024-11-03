import React from 'react';

const Container = ({
  children,
  className = '',
  //   justify,
  //   align,
}: {
  children: React.ReactNode;
  className?: string;
  //   justify?: string;
  //   align?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center px-12 py-16 lg:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
