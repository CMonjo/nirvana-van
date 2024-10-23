'use client';
import React from 'react';
import Container from '../atoms/container';
import Image from 'next/image';
import Section from '../atoms/section';

import { motion } from 'framer-motion';
import SectionTitle from '../sections/sectionTitle';

const Block = ({ className, ...rest }: { className: string }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      whileHover={{
        rotate: '1.5deg',
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={`rounded-lg p-6 ${className}`}
      {...rest}
    ></motion.div>
  );
};

export default function Why() {
  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title='Partez au Nirvana' className='mb-8' />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid h-[75vh] w-full grid-cols-12 gap-2'
        >
          <Block className='col-span-3 row-span-2 '>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src='/bento-1.jpeg'
              alt='bento'
              className='rounded-lg'
            />
          </Block>
          <Block className='col-span-6 row-span-1 bg-orange'>
            Tout ce dont vous avez besoin
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src='/bento-5.jpeg'
              alt='bento'
              className='rounded-lg'
            />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src='/bento-3.jpg'
              alt='bento'
              className='rounded-lg'
            />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src='/bento-4.jpeg'
              alt='bento'
              className='rounded-lg'
            />
          </Block>
          <Block className='col-span-3 row-span-2 bg-blue-500'>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src='/bento-6.jpg'
              alt='bento'
              className='rounded-lg'
            />
          </Block>
          <Block className='col-span-6 row-span-1 bg-red-500'>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src='/bento-2.jpeg'
              alt='bento'
              className='rounded-lg'
            />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            Les 4 saisons
          </Block>
        </motion.div>
      </Container>
    </Section>
  );
}
