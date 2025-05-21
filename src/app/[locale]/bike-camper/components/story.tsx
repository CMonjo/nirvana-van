'use client';
import React from 'react';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Image from 'next/image';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import Button from '@/components/atoms/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Story() {
  const tPage = useTranslations('pages.bike-camper.story');
  const tConfigurator = useTranslations('pages.configurator');
  const tAction = useTranslations('actions');

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
              <Link
                className='mb-2'
                href={{
                  pathname: '/configurator',
                  query: { product: 'bike-camper' },
                }}
              >
                <Button color='green' size='large'>
                  {tAction('configureMyTrailer')}
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex w-full justify-center md:w-2/5 md:justify-end'>
            <Image
              src='/bike-camper/story.png'
              alt='story'
              width={1155}
              height={600}
              className='w-full'
            />
          </div>
          {/* Mobile buttons */}
          <div className='flex flex-col items-center gap-4 md:hidden'>
            <Link
              className='mb-2'
              href={{
                pathname: '/configurator',
                query: { product: 'bike-camper' },
              }}
            >
              <Button color='green' size='large'>
                {tConfigurator('title')}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
