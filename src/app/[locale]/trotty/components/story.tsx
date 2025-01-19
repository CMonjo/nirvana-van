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
  const tPage = useTranslations('pages.trotty.story');
  const tAction = useTranslations('actions');

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={tPage('title')} />
        <div className='max-w-3xl flex-col text-center'>
          <Image
            src='/teardrop/story.png'
            alt='story'
            width={1155}
            height={600}
          />
          <Typography className='mb-4 mt-8'>{tPage('description')}</Typography>
        </div>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <Link
            href={{
              pathname: '/configurator',
              query: { product: 'teardrop' },
            }}
          >
            <Button color='orange'>{tAction('configureMy')} teardrop</Button>
          </Link>
          <Link
            href={{
              pathname: '/contact',
              query: { product: 'teardrop' },
            }}
          >
            <Button variant='outlined' color='orange'>
              {tAction('iWantRent')}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
