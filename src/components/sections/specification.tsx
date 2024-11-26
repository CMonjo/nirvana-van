'use client';
import React, { use } from 'react';
import Image from 'next/image';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import Typography from '@/components/atoms/typography';
import SectionTitle from '@/components/sections/title';
import { useTranslations } from 'next-intl';
import { ProductType } from '@/products/types';

export default function Specification({
  productKey,
  specs,
}: {
  productKey: ProductType;
  specs: string[];
}) {
  const t = useTranslations(`product.${productKey}.specifications`);

  return (
    <Section className={`bg-white`}>
      <Container className='flex-col'>
        <SectionTitle title='Spécification' />
        <div
          className={`flex w-full flex-col items-stretch gap-4 md:flex-row md:gap-8`}
        >
          <div className='relative flex min-h-[350px] w-full flex-[3] items-center justify-center rounded-3xl bg-orange md:min-h-[400px]'>
            <Image
              fill
              src={`/${productKey}/specifications.png`}
              alt='bento'
              className='rounded-3xl object-cover'
            />
            <div className='absolute inset-0 rounded-3xl bg-black/15' />
          </div>

          <div className='flex flex-[1] flex-col gap-2 rounded-3xl bg-grey px-4 py-4'>
            {specs.map((spec) => (
              <div key={`${productKey}-${spec}`}>
                <Typography className='font-medium'>{t(spec)}</Typography>
                <Typography variant='body2'>{t(spec + 'Value')}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
