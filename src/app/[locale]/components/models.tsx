'use client';
import React from 'react';
import Container from '@/components/atoms/container';
import Button from '@/components/atoms/button';
import { useRouter } from '@/i18n/routing';
import Section from '@/components/atoms/section';
import { ProductType } from '@/products/types';
import Model from '@/components/sections/model';
import SectionTitle from '@/components/sections/title';

export default function Models() {
  const router = useRouter();

  const handleClick = (productKey: ProductType) => {
    router.push({
      pathname: `/${productKey}`,
    });
  };

  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title={`Pour quel type d'aventure ?`} />
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <Model
            productKey='teardrop'
            onClick={handleClick}
            button={
              <Button color={'orange'} size='small'>
                Découvrir
              </Button>
            }
          />

          <Model
            productKey='trotty'
            onClick={handleClick}
            button={
              <Button color={'green'} size='small'>
                Découvrir
              </Button>
            }
          />
        </div>
      </Container>
    </Section>
  );
}
