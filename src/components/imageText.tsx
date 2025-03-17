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
}: Readonly<{
  section: string;
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
            {/* //TODO supprimer du modèle de données la section */}
            {/* <Typography
              variant='h1'
              className='z-10 text-5xl font-medium text-white'
            >
              {section}
            </Typography> */}
            <Image
              fill
              src={imageSource}
              alt='bento'
              className='rounded-3xl object-cover'
            />
            {/* <div className='absolute inset-0 rounded-3xl bg-black/15' /> */}
          </div>

          <div className='flex flex-[2] flex-col rounded-3xl bg-grey p-8'>
            <Typography variant='h3' className='mb-4 font-medium'>
              {title}
            </Typography>
            <div className='flex flex-col gap-2'>
              {/* //TODO refaire alignement */}
              {bulletPoints.map((point, index) => (
                <div key={index}>
                  <hr className='my-2' />
                  <Typography variant='body1'>{point}</Typography>
                </div>
              ))}
              <hr className='my-2' />
            </div>
            {/* <ul className='list-disc pl-4'>
              {bulletPoints.map((point, index) => (
                <li key={index}>
                  <Typography variant='body1'>{point}</Typography>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </Container>
    </Section>
  );
}
