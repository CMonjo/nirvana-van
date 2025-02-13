'use client';
import React from 'react';
import clsx from 'clsx';
import useIsDesktop from '@/hooks/useIsDesktop';
import { headerHeight } from '@/utils/dimensions';

const HeroContainer = ({
  children,
  className,
  headerSticky = false,
}: {
  children: React.ReactNode;
  className?: string;
  headerSticky?: boolean;
}) => {
  const isDesktop = useIsDesktop();

  return (
    <div
      className={clsx('relative w-screen', className)}
      style={{
        minHeight:
          isDesktop && !headerSticky
            ? '100vh'
            : `calc(100vh - ${headerHeight})`,
      }}
    >
      {children}
    </div>
  );
};

export default HeroContainer;
