'use client';
import React from 'react';
import Typography from '@/components/atoms/typography';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import ConfiguratorCard, { ConfiguratorCardTitle } from './configuratorCard';
import { IProduct, OptionCategory, Option } from '@/products/types';
import Checkbox from '@/components/atoms/checkbox';
import Radio from '@/components/atoms/radio';

export default function OptionPicker({
  product,
  category,
  onChange,
  selectedOption,
}: {
  product: IProduct;
  category: OptionCategory;
  onChange: (category: string, value: string) => void;
  selectedOption: string | string[];
}) {
  const tProduct = useTranslations(
    `products.${product.key}.options.${category.name}`
  );

  const isSelected = (optionKey: string) =>
    Array.isArray(selectedOption)
      ? selectedOption.includes(optionKey)
      : selectedOption === optionKey;

  const handleChange = (category: OptionCategory, option: Option) => {
    if (option.disabled || option.comingSoon || option.soldOut) return;
    if (onChange) onChange(category.name, option.key);
  };

  return (
    <ConfiguratorCard>
      <ConfiguratorCardTitle title={tProduct(`name`)} />
      <div className='grid grid-cols-3 gap-3'>
        {category?.options?.map((option, index) => (
          <div
            key={index}
            className='flex cursor-pointer flex-col rounded-2xl bg-white transition-all duration-300 hover:shadow-md'
            onClick={() => handleChange(category, option)}
          >
            <div className='relative flex h-[150px] w-full rounded-2xl'>
              <Image
                fill
                src={option.picture ? option.picture : '/default_option.png'}
                alt={product.name}
                className='rounded-2xl rounded-b-none object-cover'
              />
            </div>

            <div className='flex flex-grow flex-col justify-between p-3 py-4'>
              <div className='mb-4 flex flex-col gap-1'>
                <Typography className='text-md font-medium' variant='none'>
                  {tProduct(`options.${option.key}`)}
                </Typography>

                <Typography variant='caption' className='text-dark-lighter'>
                  Lorem ipsum dolor sit amet.
                </Typography>
              </div>

              <div className='flex w-full items-center justify-between'>
                {category.type === 'radio' ? (
                  <Radio
                    checked={isSelected(option.key)}
                    color={product.color}
                    label={isSelected(option.key) ? 'Sélectionné' : ''}
                    onChange={() => onChange(category.name, option.key)}
                  />
                ) : (
                  <Checkbox
                    checked={isSelected(option.key)}
                    color={product.color}
                    disabled={
                      option.comingSoon || option.disabled || option.soldOut
                    }
                    label={isSelected(option.key) ? 'Sélectionné' : ''}
                    onChange={() => onChange(category.name, option.key)}
                  />
                )}
                <Typography variant='none' className='text-md font-light'>
                  {option.included ? 'Inclus' : `${option.price} €`}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ConfiguratorCard>
  );
}
