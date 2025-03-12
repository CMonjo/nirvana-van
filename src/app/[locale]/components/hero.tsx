'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../../../components/atoms/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
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

      <div className='absolute top-32 flex w-full flex-col items-center justify-center md:top-[200px] '>
        <motion.h1
          className='text-center font-acorn text-3xl text-white md:text-7xl lg:text-8xl'
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 2, scale: 1.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Créateur d'aventures
          {/* {t('hero.title')} */}
        </motion.h1>
      </div>

      <div className='absolute bottom-8 z-10 flex w-full flex-col items-center justify-center gap-2'>
        {/* <h2 className='font-kobe11 text-4xl font-light text-white'>
          {t('hero.title')}
        </h2> */}
        <Typography variant='h3' className='text-center text-white'>
          Fabrication artisanale de mini-caravane
        </Typography>
        <Image
          src={`/home/french_flag.png`}
          width={30}
          height={15}
          alt='logo'
        />
        {/* <Link href={'/teardrop'}>
          <Button color='orange'>Teardrop</Button>
        </Link>
        <Link href={'/bike'}>
          <Button color='green'>Bike</Button>
        </Link> */}
      </div>
    </HeroContainer>
  );
}
