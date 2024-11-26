'use client';
import React from 'react';
import Typography from '../../../../components/atoms/typography';
import { useTranslations } from 'next-intl';
import { IProduct, IProductConfig } from '@/products/types';
import ConfiguratorCard from './configuratorCard';
import Button from '@/components/atoms/button';

export default function Basket({
  product,
  productConfiguration,
}: {
  product: IProduct;
  productConfiguration: IProductConfig;
}) {
  const tColors = useTranslations('ralColors');

  return (
    <ConfiguratorCard>
      <Typography className='font-medium'>Votre configuration</Typography>

      {JSON.stringify(productConfiguration.selectedOptions)}

      <div className='flex items-center justify-between'>
        <Typography variant='body2'>{`${product.name}`}</Typography>
        <Typography variant='caption'>{product.basePrice}€</Typography>
      </div>

      {/* {product.mainColor ? (
        <div className='flex items-center justify-between'>
          <Typography variant='body2'>{`${tColors(product.mainColor)} ${product.shadeColors ? ` - ${product.shadeColors}` : ''}`}</Typography>
          <Typography variant='caption'>Inclus</Typography>
        </div>
      ) : null} */}

      <div className='flex items-start justify-between'>
        <Typography className='font-medium'>TOTAL</Typography>
        <div className='flex flex-col items-end'>
          <Typography className={`font-medium text-${product.color}`}>
            {productConfiguration.totalPrice}€
          </Typography>
          <Typography variant='caption'>inclus 500€ TVA (20%)</Typography>
        </div>
      </div>

      <Button color={product.color}>Être recontacté</Button>
      <Button color={product.color}>Recevoir mon devis</Button>
    </ConfiguratorCard>
  );
}
