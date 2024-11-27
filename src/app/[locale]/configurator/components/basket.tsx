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
}: {
  product: IProduct;
  productConfiguration: IProductConfig;
}) {
  const selectedOptions = productConfiguration.selectedOptions;

  return (
    <ConfiguratorCard className='gap-2 p-4'>
      <Typography className='font-medium'>Votre configuration</Typography>
      <div className='flex items-center justify-between'>
        <Typography
          variant='caption'
          className='font-medium'
        >{`${product.name}`}</Typography>
        <Typography variant='caption'>{product.basePrice}€</Typography>
      </div>

      {product.categories?.map((category) => {
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
              <Divider />
              <div
                key={category.name}
                className='flex items-center justify-between'
              >
                <Typography variant='caption' className='font-medium'>
                  {selectedOption.key}{' '}
                  {shadeColor ? ` - ${shadeColor.key}` : ''}
                </Typography>
                <Typography variant='caption'>Inclus</Typography>
              </div>
            </>
          );
        }

        return (
          <>
            <Divider />
            <div key={category.name} className='flex flex-col '>
              <Typography className='text-xxs'>{category.name}</Typography>
              {options?.map((option) => {
                return (
                  <div className='flex items-center justify-between'>
                    <Typography
                      variant='caption'
                      className='font-medium'
                      key={option.key}
                    >
                      {option.key}
                    </Typography>
                    <Typography variant='caption'>
                      {option.included ? (
                        'Inclus'
                      ) : (
                        <Price price={option.price || 0} />
                      )}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}

      {/* {product.mainColor ? (
        <div className='flex items-center justify-between'>
          <Typography variant='body2'>{`${tColors(product.mainColor)} ${product.shadeColors ? ` - ${product.shadeColors}` : ''}`}</Typography>
          <Typography variant='caption'>Inclus</Typography>
        </div>
      ) : null} */}

      <div className='flex flex-col items-end justify-between'>
        <div className='flex w-full justify-between'>
          <Typography className='font-medium'>TOTAL</Typography>
          <Typography
            variant='body1'
            className={`font-acorn font-medium text-${product.color}`}
          >
            <AnimatedPrice price={productConfiguration.totalPrice} />
            {` TTC`}
          </Typography>
        </div>
        <Typography variant='caption'>
          {`inclus `}
          <AnimatedPrice price={productConfiguration.totalPrice * 0.2} />
          {` de TVA (20%)`}
        </Typography>
      </div>

      <Button color={product.color}>Être recontacté</Button>
      <Button color={product.color}>Recevoir mon devis</Button>
    </ConfiguratorCard>
  );
}
