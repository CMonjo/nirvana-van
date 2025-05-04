'use client';
import React from 'react';
import Container from '../../../components/atoms/container';
import Section from '../../../components/atoms/section';
import { BentoImage, BentoText, BentoItem } from '@/components/utils/bento';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/sections/title';
import { useTranslations } from 'next-intl';

export default function Bento() {
  const t = useTranslations('pages.home.bento');

  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title={t('title')} />

        {/* Version Mobile */}
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid w-full auto-rows-[300px] grid-cols-2 gap-4 lg:hidden'
        >
          <BentoItem className='col-span-2 row-span-1 bg-orange'>
            <BentoText title={t('1.title')} description={t('1.description')} />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green'>
            <BentoImage url='/bento-1.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1 bg-green'>
            <BentoText title={t('2.title')} description={t('2.description')} />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
        </motion.div>

        {/* Version Desktop */}
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='hidden h-[800px] w-full grid-cols-12 grid-rows-3 gap-4 lg:grid'
        >
          <BentoItem className='col-span-6 row-span-1 bg-orange'>
            <BentoText title={t('1.title')} description={t('1.description')} />
          </BentoItem>
          <BentoItem className='col-span-3 row-span-1 bg-green'>
            <BentoImage url='/bento-1.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-3 row-span-1 bg-green'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-6 row-span-2 bg-green'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-6 row-span-1 bg-green'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-6 row-span-1 bg-green'>
            <BentoText title={t('2.title')} description={t('2.description')} />
          </BentoItem>
        </motion.div>
      </Container>
    </Section>
  );
}
