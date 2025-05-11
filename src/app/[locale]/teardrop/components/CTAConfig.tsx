'use client';
import React from 'react';
import SectionTitle from '@/components/sections/title';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import { products } from '@/products/products';
import Button from '@/components/atoms/button';

export default function CTAConfig() {
  const product = products.find((product) => product.key === 'teardrop');

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
      </Container>
    </Section>
  );
}
