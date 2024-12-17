'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../../../components/atoms/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import useIsDesktop from '@/hooks/useIsDesktop';

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
      <Image
        src={`/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />
      <div className='absolute top-40 flex w-full flex-col items-center justify-center'>
        <h1 className='mx-2 my-6 max-w-5xl text-center font-acorn text-4xl text-white md:text-5xl lg:text-7xl'>
          {t('hero.title')}
        </h1>
      </div>
      <div className='absolute bottom-14 z-10 flex w-full items-center justify-center gap-4'>
        <Link href={'/teardrop'}>
          <Button color='orange'>Teardrop</Button>
        </Link>
        <Link href={'/trotty'}>
          <Button color='green'>Trotty</Button>
        </Link>
      </div>
    </div>
  );
}
