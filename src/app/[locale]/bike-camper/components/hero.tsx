'use client';
import React from 'react';
import Image from 'next/image';
import HeroContainer, { HeroTitle } from '@/components/sections/heroContainer';

export default function Hero() {
  return (
    <HeroContainer>
      <Image
        src={`/bike/hero.jpeg`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />

      <div className='absolute top-12 flex w-full flex-col items-center justify-center md:top-32 lg:top-[200px]'>
        <HeroTitle>Caravane Vélo</HeroTitle>
      </div>
    </HeroContainer>
  );
}
