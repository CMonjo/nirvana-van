'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../components/sections/title';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';
import { useTranslations } from 'next-intl';

export default function Story() {
  const t = useTranslations('pages.home.story');

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={t('title')} />
        <div className='flex flex-col gap-4 text-center'>
          <Typography variant='h3'>{t('text1')}</Typography>
          <Typography variant='h3'>{t('text2')}</Typography>
          <Typography variant='h3'>{t('text3')}</Typography>
        </div>
        <div className='mt-8 flex max-w-3xl flex-col gap-4 text-center'>
          <Image src='/home/story.png' alt='story' width={1155} height={680} />
        </div>
      </Container>
    </Section>
  );
}
