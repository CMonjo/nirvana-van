'use client';
import React from 'react';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Model from '@/components/sections/model';
import Container from '../../../../components/atoms/container';
import Button from '@/components/atoms/button';
import { ProductType } from '@/products/types';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function ChooseProduct() {
  const router = useRouter();
  const tPage = useTranslations('pages.configurator');
  const tActions = useTranslations('actions');

  const handleClick = (productKey: ProductType) => {
    router.push({
      pathname: '/configurator',
      query: { product: productKey },
    });
  };

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={tPage('title')} className='mb-4' />
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <Model
            productKey='teardrop'
            onClick={handleClick}
            button={
              <Button color={'orange'} size='small'>
                {tActions('configure')}
              </Button>
            }
          />
          <Model
            productKey='bike-camper'
            onClick={handleClick}
            button={
              <Button color={'green'} size='small'>
                {tActions('configure')}
              </Button>
            }
          />
        </div>
      </Container>
    </Section>
  );
}
