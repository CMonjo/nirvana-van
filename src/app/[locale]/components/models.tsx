'use client';
import React from 'react';
import Container from '@/components/atoms/container';
import Button from '@/components/atoms/button';
import { useRouter } from '@/i18n/routing';
import Section from '@/components/atoms/section';
import { ProductType } from '@/products/types';
import Model from '@/components/sections/model';
import SectionTitle from '@/components/sections/title';
import { useTranslations } from 'next-intl';
import Typography from '@/components/atoms/typography';

export default function Models() {
  const router = useRouter();
  const t = useTranslations('pages.home.models');
  const tAction = useTranslations('actions');

  const handleClick = (productKey: ProductType) => {
    router.push({
      pathname: `/${productKey}`,
    });
  };

  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle
          title={'Pour tout type de voyages / Découvrez nos modèles'}
        />
        <Typography variant='h3' className='mb-4 text-center'>
          Découvrez une nouvelle façon de voyager où le confort rencontre la
          simplicité. Nos mini-caravanes incarnent l'équilibre parfait entre
          fonctionnalité et bien-être, vous offrant tout le nécessaire pour une
          expérience authentique.
        </Typography>
        <div className='flex w-full flex-col gap-8 lg:flex-row'>
          <Model
            productKey='teardrop'
            onClick={handleClick}
            button={
              <Button color={'orange'} size='medium'>
                {tAction('discover')}
              </Button>
            }
          />

          <Model
            productKey='bike-camper'
            onClick={handleClick}
            button={
              <Button color={'green'} size='medium'>
                {tAction('discover')}
              </Button>
            }
          />
        </div>
      </Container>
    </Section>
  );
}
