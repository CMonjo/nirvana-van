'use client';
import React from 'react';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Model from '@/components/sections/model';
import Container from '../../../../components/atoms/container';
import Button from '@/components/atoms/button';
import { ConfiguratorCategory, IProduct, ProductType } from '@/products/types';
import { useTranslations } from 'next-intl';
import ConfiguratorCard, { ConfiguratorCardTitle } from './configuratorCard';

export default function SelectModel({
  product,
  onChange,
  selectedModel,
}: {
  product: IProduct;
  onChange: (category: string, value: string) => void;
  selectedModel: string | string[];
}) {
  const tProduct = useTranslations(`products.${product.key}.models`);
  const tPage = useTranslations('pages.configurator');

  return (
    <ConfiguratorCard>
      <ConfiguratorCardTitle title={tProduct(`name`)} />
    </ConfiguratorCard>
  );
}
