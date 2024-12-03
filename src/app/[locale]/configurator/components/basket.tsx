'use client';
import React from 'react';
import Typography from '../../../../components/atoms/typography';
import { useTranslations } from 'next-intl';
import { IProduct, IProductConfig } from '@/products/types';
import ConfiguratorCard from './configuratorCard';
import Button from '@/components/atoms/button';
import AnimatedPrice from './animatedPrice';
import { Divider } from '@mui/material';
import Price from './price';

export default function Basket({
  product,
  productConfiguration,
  onSend,
}: {
  product: IProduct;
  productConfiguration: IProductConfig;
  onSend: () => void;
}) {
  const selectedOptions = productConfiguration.selectedOptions;
  const tColors = useTranslations('ralColors');
  const tProduct = useTranslations(`products.${product.key}.options`);
  const tPage = useTranslations('pages.configurator');
  const t = useTranslations('pages.configurator.basket');

  return (
    <ConfiguratorCard className='gap-2 p-4'>
      <Typography className='font-medium'>{t('yourConfiguration')}</Typography>
      <div className='flex items-center justify-between'>
        <Typography
          variant='caption'
          className='font-medium'
        >{`${product.name}`}</Typography>
        <Typography variant='caption'>{product.basePrice}€</Typography>
      </div>

      {product.categories?.map((category, i) => {
        const isCategorySelected = selectedOptions.some(
          (o) => o.category === category.name
        );
        const options = category.options?.filter((option) =>
          selectedOptions.find(
            (o) => o.category === category.name && o.key === option.key
          )
        );

        if (!isCategorySelected || category.name === 'shade_color') return null;

        if (category.name === 'main_color') {
          const selectedOption = selectedOptions.find(
            (o) => o.category === category.name
          );
          const shadeColor = selectedOptions.find(
            (o) => o.category === 'shade_color'
          );
          if (!selectedOption) return null;
          return (
            <>
              <div key={i} className='flex items-center justify-between'>
                <Typography variant='caption' className='font-medium'>
                  {tColors(selectedOption.key)}{' '}
                  {shadeColor ? ` - ${shadeColor.key}` : ''}
                </Typography>
                <Typography variant='caption'>{tPage('include')}</Typography>
              </div>
            </>
          );
        }

        return (
          <div className='flex flex-col gap-2' key={category.name + '-' + i}>
            <Divider />
            <div key={category.name} className='flex flex-col '>
              <Typography className='text-xxs'>
                {tProduct(`${category.name}.name`)}
              </Typography>
              {options?.map((option) => {
                return (
                  <div
                    className='flex items-center justify-between'
                    key={option.key}
                  >
                    <Typography
                      variant='caption'
                      className='font-medium'
                      key={option.key}
                    >
                      {tProduct(`${category.name}.options.${option.key}`)}
                    </Typography>
                    <Typography variant='caption'>
                      {option.included ? (
                        tPage('include')
                      ) : (
                        <Price price={option.price || 0} />
                      )}
                    </Typography>
                  </div>
                );
              })}
            </div>
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
