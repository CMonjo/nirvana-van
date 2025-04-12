'use client';
import React from 'react';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import Button from '@/components/atoms/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import CardList from '@/components/utils/CardList';

export default function Story() {
  const tPage = useTranslations('pages.bike-camper.story');
  const tSpec = useTranslations('pages.bike-camper.productSpecification');
  const tAction = useTranslations('actions');

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex flex-col items-center'>
        <SectionTitle title={tPage('title')} className='mb-4 md:text-left' />
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='flex w-full flex-col items-center md:w-2/3 md:items-start'>
            <Typography className='text-center md:mb-8 md:text-left'>
              {tPage('description')}
            </Typography>
            <div className='mt-2 flex flex-col items-center gap-4 md:mt-0 md:flex-row md:items-start'>
              <Link
                href={{
                  pathname: '/configurator',
                  query: { product: 'bike-camper' },
                }}
              >
                <Button color='green'>{tAction('configureMy')} bike</Button>
              </Link>
            </div>
          </div>

          <div className='flex w-full justify-center md:w-1/3 md:justify-end'>
            <CardList title={tSpec('title')} list={['xxxx', 'yyyy', 'zzzz']} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
