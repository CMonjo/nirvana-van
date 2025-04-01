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
    <Section className={`bg-${product?.color} py-16`} topoBackground={false}>
      <Container className='flex flex-col items-center'>
        <SectionTitle title={product?.name as string} className='text-white' />
        <Button size='large' color='white' textColor={product?.color}>
          Configurer ma caravane
        </Button>
      </Container>
    </Section>
  );
}
