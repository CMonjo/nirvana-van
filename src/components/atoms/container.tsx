import React from 'react';

const Container = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center px-8 py-8 xl:px-8 xl:py-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
