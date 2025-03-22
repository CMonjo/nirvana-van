'use client';
import React from 'react';
import clsx from 'clsx';
import useIsDesktop from '@/hooks/useIsDesktop';
import { headerHeight } from '@/utils/dimensions';
import { motion } from 'framer-motion';

export const HeroTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      className='text-center font-acorn text-3xl text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl max-xs:text-[1.25rem]'
      initial={{ rotate: 0, scale: 0.8 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.h1>
  );
};

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
