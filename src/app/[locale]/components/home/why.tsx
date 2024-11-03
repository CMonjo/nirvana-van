'use client';
import React from 'react';
import Container from '../atoms/container';
import Image from 'next/image';
import Section from '../atoms/section';

import { motion, MotionProps } from 'framer-motion';
import SectionTitle from '../sections/sectionTitle';
import Typography from '../atoms/typography';

type BlockProps = React.HTMLAttributes<HTMLDivElement> & {
  className: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
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
    />
  );
};

const ImageContainer = ({ url }: { url: string }) => {
  return (
    <Image
      fill
      style={{ objectFit: 'cover' }}
      src={url}
      alt='bento'
      className='rounded-lg'
    />
  );
};

export default function Why() {
  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title='Partez au Nirvana' />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid h-[75vh] w-full grid-cols-12 gap-2'
        >
          <Block className='col-span-3 row-span-2 '>
            <ImageContainer url='/bento-1.jpeg' />
          </Block>
          <Block className='col-span-6 row-span-1 bg-orange'>
            <SectionTitle
              title='Tout ce dont vous avez besoin'
              className='color-white  text-white'
            />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            <ImageContainer url='/bento-5.jpeg' />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            <ImageContainer url='/bento-3.jpg' />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            <ImageContainer url='/bento-4.jpeg' />
          </Block>
          <Block className='col-span-3 row-span-2 bg-blue-500'>
            <ImageContainer url='/bento-6.jpeg' />
          </Block>
          <Block className='col-span-6 row-span-1 bg-red-500'>
            <ImageContainer url='/bento-2.jpeg' />
          </Block>
          <Block className='col-span-3 row-span-1 bg-green'>
            Les 4 saisons
          </Block>
        </motion.div>
      </Container>
    </Section>
  );
}
