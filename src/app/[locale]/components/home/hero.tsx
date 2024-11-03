import React from 'react';
import Image from 'next/image';
import Button from '../atoms/button';
import { Stack } from '@mui/material';

export default function Hero() {
  return (
    <div className='relative min-h-screen w-full'>
      <Image
        src={`/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='hero'
      />
      <div className='absolute top-40 flex w-full flex-col items-center justify-center'>
        <h1 className='my-6 max-w-5xl text-center font-acorn text-4xl text-white md:text-5xl lg:text-7xl'>
          Frabriquant artisanal français
          <br /> de mini-caravanes
        </h1>
      </div>
      <Stack
        spacing={2}
        direction={'row'}
        className='absolute bottom-14 z-10 w-full items-center justify-center'
      >
        <Button color='orange'>Teardrop</Button>
        <Button color='green'>Trotty</Button>
      </Stack>
    </div>
  );
}
