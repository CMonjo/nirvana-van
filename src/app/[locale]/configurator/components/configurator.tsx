'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import { ralColors } from '@/constants/ralColors';

import { IProduct } from '@/constants/products';
import { useTranslations } from 'next-intl';
import Colors from './colors';

export default function Configurator({ product }: { product: IProduct }) {
  const tColors = useTranslations('ralColors');
  const tProduct = useTranslations(`products.${product.key}`);
  const tPage = useTranslations('pages.configurator');

  return (
    <Section className=' bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={`Configurez votre ${product.key}`} />
        <Typography variant='h3'>{tPage('subtitle')}</Typography>
        <div className='flex w-full '>
          <div className='flex-[4] p-4'>
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
          </div>
          <div className='flex-[2]'>
            <div className='sticky top-[100px] w-full p-4'>
              <Colors />
              {/* <div className='bg-black/10 py-10'>Configurateur</div>
              <div className='bg-black/10 py-10'>Configurateur</div>
              <div className='bg-black/10 py-10'>Configurateur</div> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
