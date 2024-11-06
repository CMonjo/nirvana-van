'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../../../../components/atoms/button';
import { motion } from 'framer-motion';
import Typography from '@/components/atoms/typography';

export default function Hero() {
  return (
    <div className='relative min-h-screen w-full'>
      <Image
        src={`/teardrop/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />
      <div className='absolute inset-0 flex w-full flex-col items-center justify-center '>
        <motion.h1
          className='text-center font-acorn text-4xl text-white md:text-5xl lg:text-8xl'
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 2, scale: 1.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Teardrop
        </motion.h1>
      </div>
      <div className='absolute bottom-14 z-10 flex w-full items-center justify-center gap-4'>
        <Typography variant='h3' className='text-white'>
          À partir de 12 000€
        </Typography>
      </div>
    </div>
  );
}
