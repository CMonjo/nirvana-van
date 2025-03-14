'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import Button from '@/components/atoms/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Story() {
  const tPage = useTranslations('pages.bike.story');
  const tAction = useTranslations('actions');

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={tPage('title')} />
        <div className='max-w-3xl flex-col text-center'>
          <Typography>{tPage('description')}</Typography>
        </div>
        <Link
          href={{
            pathname: '/configurator',
            query: { product: 'bike' },
          }}
        >
          <Button color='green'>{tAction('configureMy')} bike</Button>
        </Link>
        <div className='gap- flex flex-row items-center'>
          <div className='relative'>
            <Image
              src='/bike/story.png'
              alt='story'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='relative'>
            <Image
              src='/bike/story.png'
              alt='story'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
