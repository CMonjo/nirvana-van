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
      <Container
        className={`h-[550px] gap-8 ${imageRight ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div
          className={`flex h-full flex-[4] items-center justify-center rounded-3xl bg-green`}
        >
          <Typography variant='h1' className='text-5xl font-medium text-white'>
            {section}
          </Typography>
        </div>
        <div className='bg-grey flex h-full flex-[2] flex-col rounded-3xl px-4 py-4'>
          <Typography variant='h3' className='mb-4 text-center font-medium'>
            {title}
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </div>
      </Container>
    </Section>
  );
}
