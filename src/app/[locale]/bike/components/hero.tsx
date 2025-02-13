'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsDesktop from '@/hooks/useIsDesktop';
import clsx from 'clsx';
import { headerHeight } from '@/utils/dimensions';

export default function Hero() {
  const isDesktop = useIsDesktop();

  return (
    <div
      className={clsx('relative w-full')}
      style={{
        minHeight: isDesktop ? '100vh' : `calc(100vh - ${headerHeight})`,
      }}
    >
      <Image
        src={`/bike/hero.jpg`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />

      <div className='absolute top-20 flex w-full flex-col items-center justify-center md:top-[200px] '>
        <motion.h1
          className='text-center font-acorn text-5xl text-white md:text-7xl lg:text-8xl'
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 2, scale: 1.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Bike
        </motion.h1>
      </div>
    </div>
  );
}
