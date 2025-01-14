'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../../../components/atoms/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import useIsDesktop from '@/hooks/useIsDesktop';
import Typography from '@/components/atoms/typography';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('pages.home');
  const isDesktop = useIsDesktop();

  return (
    <div
      className={clsx('relative w-full')}
      style={{
        minHeight: isDesktop ? '100vh' : 'calc(100vh - 5rem)',
      }}
    >
      {/* <div className='absolute inset-0 z-10 bg-black bg-opacity-15' /> */}
      <Image
        src={`/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />
      <div className='absolute top-60 flex w-full flex-col items-center justify-center'>
        <motion.h1
          className='mx-8 text-center font-acorn text-4xl text-white md:text-5xl lg:text-6xl'
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 2, scale: 1.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Fabriquant de mini-caravane
        </motion.h1>

        {/* <h1 className='mx-2 my-6 max-w-5xl text-center font-acorn text-4xl text-white md:text-5xl lg:text-7xl'> */}
        {/* {t('hero.title')} */}
        {/* Fabriquant de mini-caravane */}
        {/* </h1> */}
      </div>
      <div className='absolute bottom-14 z-10 flex w-full items-center justify-center gap-4'>
        <h2 className='font-kobe11 text-4xl font-light text-white'>
          {t('hero.title')}
          Français, artisanal, "weekend and go!"
        </h2>
        {/* <Link href={'/teardrop'}>
          <Button color='orange'>Teardrop</Button>
        </Link>
        <Link href={'/trotty'}>
          <Button color='green'>Trotty</Button>
        </Link> */}
      </div>
    </div>
  );
}
