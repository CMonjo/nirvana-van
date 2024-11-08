import React, { useMemo } from 'react';
import Image from 'next/image';
import Transition from '../atoms/transition';
import Typography from '../atoms/typography';
import { ProductType } from '@/constants/products';
import { products } from '@/constants/products';
import { useTranslations } from 'next-intl';

const Model = ({
  productKey,
  onClick,
  customImage,
  button,
}: {
  productKey: ProductType;
  onClick?: (productKey: ProductType) => void;
  customImage?: string;
  button: React.ReactNode;
}) => {
  const t = useTranslations(`product.${productKey}`);

  const product: any = useMemo(() => {
    return products.find((p: any) => p.key === productKey);
  }, [productKey]);

  const handleClick = () => {
    if (onClick) onClick(productKey);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative flex h-96 w-full flex-col items-center justify-between rounded-3xl bg-slate-200 px-4 py-8 text-center text-white ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className='z-10'>
        <Transition>
          <Typography variant='h3' className='font-acorn font-medium'>
            {product.name}
          </Typography>
        </Transition>
        <p className='font-lg my-3 mt-2 font-kobe11 text-2xl'>
          {t('description')}
        </p>
      </div>
      {button ? <div className='z-10'>{button}</div> : null}

      <Image
        src={customImage || product.image}
        alt={product.name}
        fill
        style={{ objectFit: 'cover' }}
        className='rounded-3xl'
      />
    </div>
  );
};

export default Model;
