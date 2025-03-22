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

      <div className='absolute top-12 flex w-full flex-col items-center justify-center md:top-32 lg:top-[150px]'>
        <HeroTitle>Créateur d'aventures</HeroTitle>
        <Typography variant='h2' className='mt-4 text-center text-white'>
          Des teardrops confortables, esthétiques et bien pensés
        </Typography>
      </div>

      <div className='absolute bottom-8 z-10 flex w-full flex-col items-center justify-center gap-2 px-2'>
        <Typography variant='h3' className='text-center text-white'>
          Fabrication artisanale de mini-caravane
        </Typography>
        <Image
          src={`/home/french_flag.png`}
          width={40}
          height={20}
          alt='logo'
        />
      </div>
    </HeroContainer>
  );
}
