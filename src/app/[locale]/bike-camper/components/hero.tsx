'use client';
import React from 'react';
import Image from 'next/image';
import HeroContainer, { HeroTitle } from '@/components/sections/heroContainer';
import { products } from '@/products/products';
import Typography from '@/components/atoms/typography';
import { useTranslations } from 'next-intl';
import { getPrice } from '@/utils/price';

const product = products.find((product) => product.key === 'bike-camper');

export default function Hero() {
  const tUtils = useTranslations('utils');
  const tProduct = useTranslations(`products.${product?.key}`);

  const lowestPrice = product?.models?.reduce((min, model) => {
    return Math.min(min, model.basePrice);
  }, product?.models[0].basePrice);

  return (
    <HeroContainer>
      <Image
        src={`/bike-camper/hero4.JPG`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
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
            {tUtils('startingPrice')} {getPrice(lowestPrice)}
          </Typography>
        ) : null}
      </div>
    </HeroContainer>
  );
}
