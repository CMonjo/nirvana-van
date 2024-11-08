import React from 'react';

const Container = ({
  children,
  className = '',
  noGap = false,
}: {
  children: React.ReactNode;
  className?: string;
  noGap?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-center ${noGap ? '' : 'gap-4'} px-8 py-8 xl:py-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
