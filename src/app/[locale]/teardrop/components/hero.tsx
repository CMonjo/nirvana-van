'use client';
import React from 'react';
import Image from 'next/image';
import HeroContainer, { HeroTitle } from '@/components/sections/heroContainer';
import { products } from '@/products/products';
import Typography from '@/components/atoms/typography';
import { useTranslations } from 'next-intl';

const product = products.find((product) => product.key === 'teardrop');

export default function Hero() {
  const t = useTranslations('utils');

  return (
    <HeroContainer>
      <Image
        src={`/teardrop/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />

      <div className='absolute top-12 flex w-full flex-col items-center justify-center md:top-16 lg:top-[120px]'>
        <HeroTitle>{product?.name}</HeroTitle>
      </div>
      <div className='absolute bottom-8 z-10 flex w-full flex-col items-center justify-center gap-2 px-2'>
        <Typography
          variant='h3'
          className='text-center text-white'
          sizeOverride='text-xl md:text-3xl'
        >
          {t('startingPrice')} {product?.basePrice}€
        </Typography>
      </div>
    </HeroContainer>
  );
}
