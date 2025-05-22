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
import { products } from '@/products/products';

export default function ChooseProduct() {
  const router = useRouter();
  const tPage = useTranslations('pages.configurator');
  const tActions = useTranslations('actions');

  const handleClick = (productKey: ProductType) => {
    const product = products.find((p) => p.key === productKey);
    if (product?.models?.length === 1) {
      router.push({
        pathname: `/configurator?product=${productKey}&model=${product.models[0].key}`,
      });
    } else {
      router.push({
        pathname: `/configurator?product=${productKey}`,
      });
    }
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
