'use client';
import React from 'react';
import Image from 'next/image';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';

export default function Specification({
  section,
  title,
  description,
  imageRight = false,
  background = 'bg-white',
  topoBackground = true,
}: {
  section: string;
  title: string;
  description: string;
  imageRight?: boolean;
  background?: string;
  topoBackground?: boolean;
}) {
  return (
    <Section className={`${background}`} topoBackground={topoBackground}>
      <Container>
        <div
          className={`flex w-full flex-col items-stretch gap-4 md:gap-8 ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          <div className='relative flex min-h-[350px] w-full flex-[3] items-center justify-center rounded-3xl bg-orange md:min-h-[400px]'>
            <Typography
              variant='h1'
              className='z-10 text-5xl font-medium text-white'
            >
              {section}
            </Typography>
            <Image
              fill
              src={'/bento-1.jpeg'}
              alt='bento'
              className='rounded-3xl object-cover'
            />
            <div className='absolute inset-0 rounded-3xl bg-black/15' />
          </div>

          <div className='flex flex-[2] flex-col rounded-3xl bg-grey px-4 py-4'>
            <Typography variant='h3' className='mb-4 text-center font-medium'>
              {title}
            </Typography>
            <Typography variant='body2'>{description}</Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
