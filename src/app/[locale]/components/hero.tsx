'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Typography from '@/components/atoms/typography';
import HeroContainer, { HeroTitle } from '@/components/sections/heroContainer';

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

      <div className='absolute top-12 flex w-full flex-col items-center justify-center md:top-16 lg:top-[110px]'>
        <HeroTitle>{t('hero.title')}</HeroTitle>
        <Typography
          variant='h3'
          sizeOverride='md:text-2xl lg:text-3xl'
          className='mt-4 text-center text-white'
        >
          {t('hero.description')}
        </Typography>
      </div>

      <div className='absolute bottom-8 z-10 flex w-full flex-col items-center justify-center gap-2 px-2'>
        <Image
          src={`/home/french_flag.png`}
          width={40}
          height={20}
          alt='logo'
        />
        <Typography
          variant='h3'
          className='text-center text-white'
          sizeOverride='text-xl md:text-3xl'
        >
          Fabrication artisanale de mini-caravanes
        </Typography>
      </div>
    </HeroContainer>
  );
}
