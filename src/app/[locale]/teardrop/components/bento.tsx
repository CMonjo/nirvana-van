'use client';
import React from 'react';
import Container from '../../../../components/atoms/container';
import Section from '../../../../components/atoms/section';
import { BentoImage, BentoText, BentoItem } from '@/components/utils/bento';
import { motion } from 'framer-motion';
import SectionTitle from '../../../../components/sections/title';

export default function Bento() {
  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title='Les équipements' />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid h-[1800px] w-full grid-cols-2 grid-rows-6 gap-2 lg:h-[75vh] lg:grid-cols-12 lg:grid-rows-3'
        >
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-2'>
            <BentoImage url='/bento-1.jpeg' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-orange  lg:col-span-6 lg:row-span-1'>
            <BentoImage url='/bento-5.jpeg' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-5.jpeg' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-3.jpg' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-4.jpeg' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-3 lg:row-span-2'>
            <BentoImage url='/bento-6.png' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-6 lg:row-span-1'>
            <BentoImage url='/bento-2.jpeg' text='Bequille' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-3 lg:row-span-1'>
            <BentoImage url='/bento-5.jpeg' text='Bequille' />
          </BentoItem>
        </motion.div>
      </Container>
    </Section>
  );
}
