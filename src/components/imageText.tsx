'use client';
import React from 'react';
import Image from 'next/image';
import Section from './atoms/section';
import Container from './atoms/container';
import CardList from './utils/CardList';

export default function ImageText({
  title,
  description,
  imageRight = false,
  background = 'bg-white',
  topoBackground = true,
  imageSource,
}: Readonly<{
  title: string;
  description: string;
  imageRight?: boolean;
  background?: string;
  topoBackground?: boolean;
  imageSource: string;
}>) {
  const bulletPoints = description.split('\n');

  return (
    <Section
      className={`${background || 'bg-white'}`}
      topoBackground={topoBackground}
    >
      <Container>
        <div
          className={`flex w-full flex-col items-stretch gap-4 md:gap-8 ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          <div className='relative flex min-h-[300px] w-full flex-[4] items-center justify-center rounded-3xl bg-orange md:min-h-[500px]'>
            <Image
              fill
              src={imageSource}
              alt='bento'
              className='rounded-3xl object-cover'
            />
          </div>
          <div className='flex flex-[2]'>
            <CardList title={title} list={bulletPoints} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
