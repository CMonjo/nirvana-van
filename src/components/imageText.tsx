'use client';
import React from 'react';
import Image from 'next/image';
import Section from './atoms/section';
import Container from './atoms/container';
import Typography from './atoms/typography';

export default function ImageText({
  section,
  title,
  description,
  imageRight = false,
  background = 'bg-white',
  topoBackground = true,
  imageSource,
}: {
  section: string;
  title: string;
  description: string;
  imageRight?: boolean;
  background?: string;
  topoBackground?: boolean;
  imageSource: string;
}) {
  const bulletPoints = description.split('\n');

  return (
    <Section
      className={`${background ? background : 'bg-white'}`}
      topoBackground={topoBackground}
    >
      <Container>
        <div
          className={`flex w-full flex-col items-stretch gap-4 md:gap-8 ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          <div className='relative flex min-h-[300px] w-full flex-[3] items-center justify-center rounded-3xl bg-orange md:min-h-[350px]'>
            <Typography
              variant='h1'
              className='z-10 text-5xl font-medium text-white'
            >
              {section}
            </Typography>
            <Image
              fill
              src={imageSource}
              alt='bento'
              className='rounded-3xl object-cover'
            />
            <div className='absolute inset-0 rounded-3xl bg-black/15' />
          </div>

          <div className='flex flex-[2] flex-col rounded-3xl bg-grey p-8'>
            <Typography variant='h3' className='mb-4 font-medium'>
              {title}
            </Typography>
            <ul className='list-disc pl-4'>
              {bulletPoints.map((point, index) => (
                <li key={index}>
                  <Typography variant='body1'>{point}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
