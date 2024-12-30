'use client';
import React from 'react';
import Container from '../../../../components/atoms/container';
import Section from '../../../../components/atoms/section';
import { BentoImage, BentoItem } from '@/components/utils/bento';
import { motion } from 'framer-motion';
import SectionTitle from '../../../../components/sections/title';
import { useTranslations } from 'next-intl';

export default function Bento() {
  const t = useTranslations('pages.teardrop.bento');

  const items = [
    {
      image: '/teardrop/bento/alu.png',
      title: t('aluminum'),
    },
    {
      image: '/teardrop/bento/solar.png',
      title: t('solarPanel'),
    },
    {
      image: '/teardrop/bento/crutches.png',
      title: t('crutches'),
    },
    {
      image: '/teardrop/bento/materials.jpeg',
      title: t('materials'),
    },
    {
      image: '/teardrop/bento/openings.JPG',
      title: t('openings'),
    },
    {
      image: '/teardrop/bento/isolation.jpeg',
      title: t('awnings'),
    },
    {
      image: '/teardrop/bento/ecoflow.png',
      title: t('ecoflowLighting'),
    },
    {
      image: '/teardrop/bento/insulation.png',
      title: t('insulation'),
    },
  ];

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
          className='grid h-[1800px] w-full grid-cols-2 grid-rows-6 gap-2 lg:h-[75vh] lg:grid-cols-12 lg:grid-rows-3'
        >
          <BentoItem className='col-span-2 row-span-1   lg:col-span-3 lg:row-span-2'>
            <BentoImage url={items[0].image} text={items[0].title} />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1  lg:col-span-6 lg:row-span-1'>
            <BentoImage url={items[1].image} text={items[1].title} />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1   lg:col-span-3 lg:row-span-1'>
            <BentoImage url={items[2].image} text={items[2].title} />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1   lg:col-span-3 lg:row-span-1'>
            <BentoImage url={items[3].image} text={items[3].title} />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1   lg:col-span-3 lg:row-span-1'>
            <BentoImage url={items[4].image} text={items[4].title} />
          </BentoItem>
          <BentoItem className='col-span-2 row-span-1   lg:col-span-3 lg:row-span-2'>
            <BentoImage url={items[5].image} text={items[5].title} />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1   lg:col-span-6 lg:row-span-1'>
            <BentoImage url={items[6].image} text={items[6].title} />
          </BentoItem>
          <BentoItem className='col-span-1 row-span-1   lg:col-span-3 lg:row-span-1'>
            <BentoImage url={items[7].image} text={items[7].title} />
          </BentoItem>
        </motion.div>
      </Container>
    </Section>
  );
}
