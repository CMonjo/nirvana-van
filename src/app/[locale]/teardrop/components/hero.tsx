'use client';
import React from 'react';
import Image from 'next/image';
import HeroContainer, { HeroTitle } from '@/components/sections/heroContainer';
import { products } from '@/products/products';
import Typography from '@/components/atoms/typography';
import { useTranslations } from 'next-intl';
import { getPrice } from '@/utils/price';

const product = products.find((product) => product.key === 'teardrop');

export default function Hero() {
  const t = useTranslations('utils');
  const tProduct = useTranslations(`products.${product?.key}`);

  const lowestPrice = product?.models?.reduce((min, model) => {
    return Math.min(min, model.basePrice);
  }, product?.models[0].basePrice);

  return (
    <HeroContainer>
      <Image
        src={`/teardrop/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        sizes='100vw'
        alt='hero'
        priority
      />

      <div className='absolute top-12 flex w-full flex-col items-center justify-center md:top-16 lg:top-[120px]'>
        <HeroTitle>{tProduct('name')}</HeroTitle>
      </div>
      <div className='absolute bottom-8 z-10 flex w-full flex-col items-center justify-center gap-2 px-2'>
        {lowestPrice ? (
          <Typography
            variant='h3'
            className='text-center text-white'
            sizeOverride='text-xl md:text-3xl'
          >
            {t('startingPrice')} {getPrice(lowestPrice)}
          </Typography>
        ) : null}
      </div>
    </HeroContainer>
  );
}
