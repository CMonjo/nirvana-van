'use client';
import React from 'react';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';
import Image from 'next/image';
import SocialLinks from '../../../components/utils/socialLinks';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Transition from '@/components/atoms/transition';

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
            <Transition>
              <Typography variant='h2' className='text-center'>
                {t('title')}
              </Typography>
            </Transition>
            <SocialLinks />
          </div>
        </Container>
      </Section>

      <div className='w-full pl-2'>
        <div className='flex gap-4 md:gap-8'>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='relative h-40 w-28 flex-shrink-0 md:h-80 md:w-56'
              whileHover={{ y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                className='rounded-3xl object-cover'
                fill
                alt={`social-image-${index + 1}`}
                src={image}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className='mt-4 w-full pl-2 md:hidden'>
        <div className='-ml-20 flex gap-4 '>
          {images.reverse().map((image, index) => (
            <motion.div
              key={index}
              className='relative h-40 w-28 flex-shrink-0'
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                className='rounded-3xl object-cover'
                fill
                alt={`social-image-${index + 1}`}
                src={image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// <motion.div
//   variants={{
//     initial: {
//       scale: 0.5,
//       y: 50,
//       opacity: 0,
//     },
//     animate: {
//       scale: 1,
//       y: 0,
//       opacity: 1,
//     },
//   }}
//   whileHover={{
//     rotate: '1.5deg',
//   }}
//   transition={{
//     type: 'spring',
//     mass: 3,
//     stiffness: 400,
//     damping: 50,
//   }}
//   key={index}
//   className='relative h-40 w-28 flex-shrink-0'
// ></motion.div>;
