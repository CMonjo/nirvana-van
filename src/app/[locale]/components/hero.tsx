'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Typography from '@/components/atoms/typography';
import { motion } from 'framer-motion';
import HeroContainer from '@/components/sections/heroContainer';

export default function Hero() {
  const t = useTranslations('pages.home');

  return (
    <HeroContainer>
      <Image
        src={`/hero.JPG`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />

      <div className='absolute top-12 flex w-full flex-col items-center justify-center md:top-32 lg:top-[200px]'>
        <motion.h1
          className='max-xs:text-[1.25rem] text-center font-acorn text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl'
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 2, scale: 1.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Créateur d'aventures
        </motion.h1>
      </div>

      <div className='absolute bottom-8 z-10 flex w-full flex-col items-center justify-center gap-2 px-2'>
        <Typography variant='h3' className='text-center text-white'>
          Fabrication artisanale de mini-caravane
        </Typography>
        <Image
          src={`/home/french_flag.png`}
          width={30}
          height={15}
          alt='logo'
        />
      </div>
    </HeroContainer>
  );
}
