'use client';
import React from 'react';
import SectionTitle from '@/components/sections/title';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import { products } from '@/products/products';
import Button from '@/components/atoms/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CTAConfig() {
  const product = products.find((product) => product.key === 'teardrop');
  const tPage = useTranslations('pages.teardrop.ctaSection');
  const tActions = useTranslations('actions');

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
        <SectionTitle title={tPage('title')} />
        <div className='flex gap-2'>
          <Link
            href={{
              pathname: '/rental',
            }}
          >
            <Button size='large' color={product?.color}>
              {tActions('rent')}
            </Button>
          </Link>
          <Link
            href={{
              pathname: '/configurator',
              query: { product: 'teardrop', model: 'teardrop' },
            }}
          >
            <Button size='large' color={product?.color}>
              {tActions('configureMyTrailer')}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
