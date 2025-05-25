'use client';
import React from 'react';
import Typography from '@/components/atoms/typography';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import ConfiguratorCard, { ConfiguratorCardTitle } from './configuratorCard';
import { IProduct, ConfiguratorCategory, Option } from '@/products/types';
import Checkbox from '@/components/atoms/checkbox';
import Radio from '@/components/atoms/radio';
import { getPrice } from '@/utils/price';
import clsx from 'clsx';
import Tooltip from '@/components/atoms/tooltip';

export default function OptionPicker({
  product,
  category,
  onChange,
  selectedOption,
}: {
  product: IProduct;
  category: ConfiguratorCategory;
  onChange: (category: string, value: string) => void;
  selectedOption: string | string[];
}) {
  const tOptions = useTranslations('pages.configurator.options');
  const tPage = useTranslations('pages.configurator');

  const isSelected = (optionKey: string) =>
    Array.isArray(selectedOption)
      ? selectedOption.includes(optionKey)
      : selectedOption === optionKey;

  const handleChange = (category: ConfiguratorCategory, option: Option) => {
    if (option.disabled || option.comingSoon || option.soldOut) return;
    if (onChange) onChange(category.name, option.key);
  };

  return (
    <ConfiguratorCard>
      <ConfiguratorCardTitle title={tOptions(`${category.name}`)} />
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
        {category?.options?.map((option, index) => (
          <div
            key={index}
            className='flex cursor-pointer flex-col rounded-2xl bg-white transition-all duration-300 hover:shadow-md'
            onClick={() => handleChange(category, option)}
          >
            <div className='relative flex h-[150px] w-full rounded-2xl'>
              <Image
                fill
                src={
                  option.picture
                    ? `/${product.key}/configurator/${option.picture}`
                    : '/full_black.png'
                }
                alt={tOptions(`${option.key}`)}
                className={clsx('rounded-2xl rounded-b-none', {
                  'object-contain': !option.picture,
                  'object-cover': option.picture,
                  'opacity-30': !option.picture,
                })}
                style={
                  !option.picture
                    ? {
                        padding: '1rem',
                        paddingTop: '2rem',
                      }
                    : undefined
                }
              />
            </div>

            <div className='flex flex-grow flex-col justify-between p-3 py-4'>
              <div className='mb-4 flex flex-col gap-1'>
                <Typography className='text-md font-medium' variant='none'>
                  {tOptions(`${option.key}`)}
                </Typography>
              </div>

              <div className='flex w-full items-center justify-between'>
                {category.type === 'radio' ? (
                  <Radio
                    checked={isSelected(option.key)}
                    color={product.color}
                    label={isSelected(option.key) ? tPage('selected') : ''}
                    onChange={() => onChange(category.name, option.key)}
                  />
                ) : (
                  <Tooltip
                    content={
                      option.comingSoon
                        ? tPage('comingSoon')
                        : option.soldOut
                          ? tPage('soldOut')
                          : ''
                    }
                    position='top'
                    key={index}
                  >
                    <Checkbox
                      checked={isSelected(option.key)}
                      color={product.color}
                      disabled={
                        option.comingSoon || option.disabled || option.soldOut
                      }
                      label={isSelected(option.key) ? tPage('selected') : ''}
                      onChange={() => onChange(category.name, option.key)}
                    />
                  </Tooltip>
                )}
                <div className='flex flex-col items-end'>
                  {(option.price || option.included || option.onDemand) && (
                    <Typography
                      variant='none'
                      className={clsx('text-md font-light', {
                        'line-through': option.comingSoon || option.soldOut,
                      })}
                    >
                      {option.included
                        ? tPage('include')
                        : option.onDemand
                          ? tPage('onDemand')
                          : getPrice(option.price || 0)}
                    </Typography>
                  )}
                  {(option.comingSoon || option.soldOut) && (
                    <Typography
                      variant='caption'
                      className='text-md mt-[-5px] font-light'
                    >
                      {option.comingSoon
                        ? tPage('comingSoon')
                        : tPage('soldOut')}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ConfiguratorCard>
  );
}
