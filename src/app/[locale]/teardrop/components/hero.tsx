'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typography from '@/components/atoms/typography';
import { useTranslations } from 'next-intl';
import { products } from '@/products/products';

export default function Hero() {
  const t = useTranslations('pages.teardrop.hero');
  const product = products.find((product) => product.key === 'teardrop');

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
          {`${t('price')} ${product?.basePrice}€`}
        </Typography>
      </div>
    </div>
  );
}
