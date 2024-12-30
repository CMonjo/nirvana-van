'use client';
import React, { useEffect, useState } from 'react';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';
import Image from 'next/image';
import SocialLinks from '../../../components/utils/socialLinks';
import { useTranslations } from 'next-intl';

const images = [
  '/home/social/1.JPG',
  '/home/social/2.jpeg',
  '/home/social/3.jpeg',
  '/home/social/4.png',
  '/home/social/5.jpeg',
  '/home/social/6.jpeg',
  '/home/social/7.JPG',
  '/home/social/8.JPG',
  '/home/social/9.JPG',
  '/home/social/10.JPG',
  '/home/social/11.JPG',
  '/home/social/12.JPG',
  '/home/social/13.jpeg',
];

export default function Socials() {
  const t = useTranslations('pages.home.socials');

  return (
    <div className='flex w-full flex-col items-center bg-white pb-16'>
      <Section className='overflow-hidden'>
        <Container className='mb-0 flex-col' noGap>
          <div className='flex w-full justify-center md:justify-start'>
            <Typography variant='caption' className='text-orange'>
              #nirvanavan
            </Typography>
          </div>
          <div className='flex w-full flex-col items-center justify-between md:flex-row'>
            <Typography variant='h2' className='text-center'>
              {t('title')}
            </Typography>
            <SocialLinks />
          </div>
        </Container>
      </Section>

      <div className='w-full overflow-hidden pl-2'>
        <div className='flex gap-4 md:gap-8'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative h-40 w-28 flex-shrink-0 md:h-80 md:w-56'
            >
              <Image
                className='rounded-3xl object-cover'
                fill
                alt={`social-image-${index + 1}`}
                src={image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-4 w-full overflow-hidden pl-2 md:hidden'>
        <div className='-ml-20 flex gap-4 '>
          {images.reverse().map((image, index) => (
            <div key={index} className='relative h-40 w-28 flex-shrink-0'>
              <Image
                className='rounded-3xl object-cover'
                fill
                alt={`social-image-${index + 1}`}
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
