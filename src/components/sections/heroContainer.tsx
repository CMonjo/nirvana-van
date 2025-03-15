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
      className={clsx(
        'relative min-h-[60vh] w-screen lg:min-h-screen',
        className
      )}
      style={{
        minHeight: headerSticky ? `calc(100vh - ${headerHeight})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default HeroContainer;
