'use client';
import React from 'react';
import Container from '../../../../components/atoms/container';
import Section from '../../../../components/atoms/section';
import { BentoImage, BentoItem } from '@/components/utils/bento';
import { motion } from 'framer-motion';
import SectionTitle from '../../../../components/sections/title';
import { useTranslations } from 'next-intl';

export default function Bento() {
  const t = useTranslations('pages.bike-camper.bento');

  const items = [
    {
      image: '/bike-camper/bento/openings.png',
      title: t('openings'),
    },
    {
      image: '/bike-camper/bento/table.JPG',
      title: t('table'),
    },
    {
      image: '/bike-camper/bento/parkingBrake.JPG',
      title: t('parkingBrake'),
    },
    {
      image: '/bike-camper/bento/wheel.JPG',
      title: t('wheel'),
    },
    {
      image: '/bike-camper/bento/solar.JPG',
      title: t('solarPanel'),
    },
    {
      image: '/bike-camper/bento/crutches.jpeg',
      title: t('crutches'),
    },
    {
      image: '/bike-camper/bento/light.JPG',
      title: t('light'),
    },
    {
      image: '/bike-camper/bento/storage.JPG',
      title: t('storage'),
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
          className='grid h-[1800px] w-full grid-cols-2 grid-rows-6 gap-4 lg:h-[75vh] lg:grid-cols-12 lg:grid-rows-3'
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
