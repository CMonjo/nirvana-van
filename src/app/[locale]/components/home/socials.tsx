'use client';
import React from 'react';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';
import Image from 'next/image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import SocialLinks from '../utils/socialLinks';

const images = [
  '/bento-1.jpeg',
  '/bento-2.jpeg',
  '/bento-3.jpg',
  '/bento-4.jpeg',
  '/bento-5.jpeg',
  '/bento-6.png',
  '/bento-1.jpeg',
  '/bento-6.png',
];

export default function Socials() {
  return (
    <div className='flex w-full flex-col items-center bg-white pb-16'>
      <Section className='overflow-hidden'>
        <Container className='mb-0 flex-col pb-4'>
          <div className='flex w-full justify-center md:justify-start'>
            <Typography variant='caption' className='text-orange'>
              #nirvanavan
            </Typography>
          </div>
          <div className='flex w-full flex-col items-center justify-between md:flex-row'>
            <Typography variant='h2' className='text-center'>
              Partagez vos aventures
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
