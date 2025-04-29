import React from 'react';

const Container = ({
  children,
  className = '',
  noGap = false,
  itemsAlign = 'center',
}: {
  children: React.ReactNode;
  className?: string;
  noGap?: boolean;
  itemsAlign?: 'start' | 'center' | 'end';
}) => {
  return (
    <div
      className={`flex items-${itemsAlign} justify-center ${noGap ? '' : 'gap-4'} px-8 py-8 xl:py-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
