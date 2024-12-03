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
        <div className='flex max-w-3xl flex-col gap-4 text-center'>
          <Typography>{t('text1')}</Typography>
          <Typography>{t('text2')}</Typography>
          <Typography className='mb-8'>{t('text3')}</Typography>

          <Image src='/story.png' alt='story' width={1155} height={680} />
        </div>
      </Container>
    </Section>
  );
}
