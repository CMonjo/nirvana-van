'use client';
import React from 'react';
import Container from '@/components/atoms/container';
import Section from '@/components/atoms/section';
import { BentoImage, BentoText, BentoItem } from '@/components/utils/bento';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/sections/title';
import { useTranslations } from 'next-intl';

export default function Bento() {
  const t = useTranslations('pages.bike-camper.bento');

  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title={t('title')} />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid h-[1800px] w-full grid-cols-2 grid-rows-6 gap-4 lg:h-[80vh] lg:grid-cols-12 lg:grid-rows-12'
        >
          <BentoItem className='col-span-2 row-span-1 bg-green  lg:col-span-6 lg:row-span-6'>
            <BentoImage url='/bento-1.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-6 lg:row-span-6'>
            <BentoImage url='/bento-1.jpeg' />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1 bg-green  lg:col-span-12 lg:row-span-12'>
            <BentoImage url='/bento-5.jpeg' />
          </BentoItem>
        </motion.div>
      </Container>
    </Section>
  );
}
