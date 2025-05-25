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

const Buttons = () => {
  const tAction = useTranslations('actions');
  return (
    <>
      <Link
        href={{
          pathname: '/configurator',
          query: { product: 'teardrop' },
        }}
      >
        <Button size='large' color='orange'>
          {tAction('configureMy')} teardrop
        </Button>
      </Link>
      <Link
        href={{
          pathname: '/contact',
          query: { product: 'teardrop' },
        }}
      >
        <Button variant='outlined' size='large' color='orange'>
          {tAction('iWantRent')}
        </Button>
      </Link>
    </>
  );
};

export default function Story() {
  const tPage = useTranslations('pages.teardrop.story');

  return (
    <Section className='bg-white' topoBackground>
      <Container>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='flex w-full flex-col items-center gap-4 md:w-3/5 md:items-start'>
            <SectionTitle title={tPage('title')} className='md:text-left' />
            <Typography className='text-center md:text-left'>
              {tPage('description')}
            </Typography>
            {/* Desktop buttons */}
            <div className='hidden flex-col items-center gap-2 md:flex md:flex-row md:items-start'>
              <Buttons />
            </div>
          </div>

          <div className='flex w-full justify-center md:w-2/5 md:justify-end'>
            <Image
              src='/teardrop/story2.png'
              alt='story'
              width={1155}
              height={600}
              className='w-full'
            />
          </div>
          {/* Mobile buttons */}
          <div className='flex flex-col items-center gap-2 md:hidden'>
            <Buttons />
          </div>
        </div>
      </Container>
    </Section>
  );
}
