'use client';
import React from 'react';
import SectionTitle from '../sections/title';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';
import { ProductType } from '@/products/types';
import { products } from '@/products/products';
import Button from '../atoms/button';

interface CTAConfigProps {
  productKey: string;
}

export default function CTAConfig({ productKey }: CTAConfigProps) {
  const product = products.find((product) => product.key === productKey);

  return (
    <Section
      className={`bg-${product?.color} min-h-[45vh] py-16`}
      topoBackground={true}
      imageBackground='/hero.JPG'
      innerClassName='flex items-center justify-start'
    >
      <div className='absolute inset-0 bg-black/30' />

      <Container className='relative z-10 flex flex-col items-start justify-center text-white'>
        <SectionTitle title={"Testez avant d'acheter"} />
        <div className='flex gap-2'>
          <Button size='large' color='orange'>
            Louer*
          </Button>
          <Button size='large' color='orange'>
            Configurer ma caravane
          </Button>
        </div>
        <Typography>* Toute location est offerte en cas d'achat</Typography>
      </Container>
    </Section>
  );
}
