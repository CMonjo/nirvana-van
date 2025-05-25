'use client';
import React from 'react';
import Typography from '../../../../components/atoms/typography';
import { useTranslations } from 'next-intl';
import { IBasketConfig, IProduct, IProductConfig } from '@/products/types';
import ConfiguratorCard from './configuratorCard';
import Button from '@/components/atoms/button';
import AnimatedPrice from './animatedPrice';
import { Divider } from '@mui/material';

export default function Basket({
  product,
  productConfiguration,
  config,
  onSend,
}: {
  product: IProduct;
  config: IBasketConfig[] | null;
  productConfiguration: IProductConfig;
  onSend: () => void;
}) {
  const tPage = useTranslations('pages.configurator');
  const t = useTranslations('pages.configurator.basket');

  return (
    <ConfiguratorCard className='gap-2 p-4'>
      <Typography className='font-medium'>{t('yourConfiguration')}</Typography>
      {config?.map((cat, i) => {
        return (
          <div key={'cat-' + i}>
            {cat?.name ? (
              <div>
                <Divider sx={{ mb: 1 }} />
              </div>
            ) : null}
            {cat?.name ? (
              <>
                <Typography className='text-xxs'>{cat.name}</Typography>
              </>
            ) : null}
            {cat.options?.map((option, j) => {
              return (
                <div className='flex items-center justify-between' key={j}>
                  <Typography variant='caption' className='font-medium'>
                    {option.key}
                  </Typography>
                  <Typography variant='caption'>{option.price}</Typography>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className='flex flex-col items-end justify-between'>
        <div className='flex w-full justify-between'>
          <Typography className='font-medium'>{t('total')}</Typography>
          <Typography
            variant='body1'
            className={`font-acorn font-medium text-${product.color}`}
          >
            <AnimatedPrice price={productConfiguration.totalPrice} />
            {` TTC`}
          </Typography>
        </div>
        <Typography variant='caption'>
          {tPage('include')}{' '}
          <AnimatedPrice price={productConfiguration.totalPrice * 0.2} />
          {` `}
          {t('vat')}{' '}
        </Typography>
      </div>
      <Button className='justify-center' color={product.color} onClick={onSend}>
        {t('receiveQuote')}
      </Button>
    </ConfiguratorCard>
  );
}
