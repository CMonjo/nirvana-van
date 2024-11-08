'use client';
import React from 'react';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Model from '@/components/sections/model';
import Container from '../../../../components/atoms/container';
import Button from '@/components/atoms/button';
import { ProductType } from '@/constants/products';
import { useRouter } from '@/i18n/routing';

export default function ChooseModel() {
  const router = useRouter();

  const handleClick = (productKey: ProductType) => {
    router.push({
      pathname: '/configurator',
      query: { product: productKey },
    });
  };

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={`Configurateur`} />
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <Model
            productKey='teardrop'
            onClick={handleClick}
            button={
              <Button color={'orange'} size='small'>
                Configurer
              </Button>
            }
          />
          <Model
            productKey='trotty'
            onClick={handleClick}
            button={
              <Button color={'green'} size='small'>
                Configurer
              </Button>
            }
          />
        </div>
      </Container>
    </Section>
  );
}
