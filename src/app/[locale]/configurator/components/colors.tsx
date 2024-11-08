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

export default function Colors() {
  const tColors = useTranslations('ralColors');

  return (
    <div className='gap-4 rounded-3xl bg-grey p-4'>
      <Typography variant='h3' className='mb-4 font-light'>
        Couleur
      </Typography>
      <div className='flex flex-wrap gap-4'>
        {ralColors.map((color, index) => (
          <div
            key={index}
            className={`flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-4 ${index === 3 ? 'border-dark-lighter' : 'border-transparent'} bg-white`}
          >
            <div
              className='h-full w-full rounded-lg rounded-b-none'
              style={{ backgroundColor: `${color.shades[0].hex}` }}
            />
            <Typography variant='body2'>{tColors(color.color)}</Typography>
          </div>
        ))}
      </div>
      <Typography variant='h3' className='mb-4 font-light'>
        Teinte
      </Typography>
      <div className='flex flex-wrap gap-4'>
        {ralColors.map((color, index) => (
          <div
            key={index}
            style={{
              borderColor: index === 3 ? `${color.shades[0].hex}` : 'white',
            }}
            className={`flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-lg border-2  bg-white`}
          >
            <div
              className='h-full w-full rounded-md rounded-b-none'
              style={{ backgroundColor: `${color.shades[0].hex}` }}
            />
            {/* <Typography
              variant='body2'
              className='text-sm'
              style={{ fontSize: 6 }}
            >
              <Typography
                variant='body2'
                style={{ fontSize: 10, lineHeight: 2 }}
              >
                {tColors(color.color)}
              </Typography>
            </Typography> */}
          </div>
        ))}
      </div>
    </div>
  );
}
