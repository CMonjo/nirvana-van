'use client';
import React from 'react';
import Container from '../atoms/container';
import Image from 'next/image';
import Section from '../atoms/section';

import { motion, MotionProps } from 'framer-motion';
import SectionTitle from '../sections/sectionTitle';
import Typography from '../atoms/typography';

import bento1 from '../../../../../public/bento-1.jpeg';
import bento2 from '../../../../../public/bento-2.jpeg';
import bento3 from '../../../../../public/bento-3.jpg';
import bento4 from '../../../../../public/bento-4.jpeg';
import bento5 from '../../../../../public/bento-5.jpeg';
import bento6 from '../../../../../public/bento-6.png';

type BentoItemProps = React.HTMLAttributes<HTMLDivElement> & {
  className: string;
} & MotionProps;

const BentoItem = ({ className, ...rest }: BentoItemProps) => {
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
      className={`rounded-lg ${className}`}
      {...rest}
    />
  );
};

const BentoImage = ({ url }: { url: string }) => {
  return (
    <div className='relative h-full w-full items-center justify-center rounded-3xl '>
      <Image fill src={url} alt='bento' className='rounded-lg object-cover' />
    </div>
  );
};

const BentoText = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className='relative h-full w-full rounded-3xl p-6 text-white'>
      <Typography variant='h2'>{title}</Typography>
      {description ? <Typography>{description}</Typography> : null}
    </div>
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
          className='grid h-[1800px] w-full grid-cols-2 grid-rows-6 gap-2 lg:h-[75vh] lg:grid-cols-12 lg:grid-rows-3'
        >
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-2'>
            <BentoImage url='/bento-1.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-orange  lg:col-span-6 lg:row-span-1'>
            <BentoText
              title='Les 4 saisons'
              description={`Partez n'importe quand`}
            />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-3.jpg' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-4.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-2'>
            <BentoImage url='/bento-6.png' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-6 lg:row-span-1'>
            <BentoImage url='/bento-2.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoText
              title='Les 4 saisons'
              description={`Partez n'importe quand`}
            />
          </BentoItem>
        </motion.div>
      </Container>
    </Section>
  );
}
