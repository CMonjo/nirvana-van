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
      className={`bg-${product?.color} min-h-[55vh] py-16`}
      topoBackground={true}
      imageBackground={`/rent.jpeg`}
      innerClassName='flex items-center justify-start'
    >
      <div className='absolute inset-0 bg-black/30' />

      <Container
        itemsAlign='start'
        className='relative z-10 w-full flex-col items-center text-white md:items-start'
      >
        <SectionTitle title={"Location remboursée en cas d'achat"} />
        <div className='flex gap-2'>
          <Button size='large' color={product?.color}>
            Louer
          </Button>
          <Button size='large' color={product?.color}>
            Configurer ma caravane
          </Button>
        </div>
        {/* <Typography variant='body3'> */}
        {/* * Location remboursée en cas d'achat */}
        {/* </Typography> */}
      </Container>
    </Section>
  );
}
