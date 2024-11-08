import React from 'react';
import Image from 'next/image';
import Button from '../../../components/atoms/button';

import { useTranslations } from 'next-intl';
import LinkWrapper from '@/components/utils/LinkWrapper';

export default function Hero() {
  const t = useTranslations('HomePage');
  return (
    <div className='relative min-h-screen w-full'>
      <Image
        src={`/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />
      <div className='absolute top-40 flex w-full flex-col items-center justify-center'>
        <h1 className='mx-2 my-6 max-w-5xl text-center font-acorn text-4xl text-white md:text-5xl lg:text-7xl'>
          {t('hero_title')}
        </h1>
      </div>
      <div className='absolute bottom-14 z-10 flex w-full items-center justify-center gap-4'>
        <LinkWrapper href={'/teardrop'}>
          <Button color='orange'>Teardrop</Button>
        </LinkWrapper>
        <LinkWrapper href={'/trotty'}>
          <Button color='green'>Trotty</Button>
        </LinkWrapper>
      </div>
    </div>
  );
}
