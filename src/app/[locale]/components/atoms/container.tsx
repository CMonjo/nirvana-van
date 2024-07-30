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
      className={`flex items-center justify-center px-12 py-16 lg:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
