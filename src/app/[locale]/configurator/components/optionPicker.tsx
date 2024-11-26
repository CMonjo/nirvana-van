'use client';
import React, { useMemo } from 'react';
import Typography from '../../../../components/atoms/typography';
import { ralColors } from '@/products/ralColors';
import VerifiedIcon from '@mui/icons-material/Verified';

import { useTranslations } from 'next-intl';
import ConfiguratorCard, { ConfiguratorCardTitle } from './configuratorCard';
import Tooltip from '@/components/atoms/tooltip';

export default function Colors({
  mainColor,
  shadeColor,
  onChange,
}: {
  mainColor: string | undefined;
  shadeColor: string | undefined;
  onChange: (category: string, value: string) => void;
}) {
  const tColors = useTranslations('ralColors');

  const shades = useMemo(
    () => ralColors.find((c) => c.color === mainColor)?.shades,
    [mainColor]
  );

  return (
    <ConfiguratorCard>
      <ConfiguratorCardTitle title='Couleur' />
      <div className='flex flex-wrap gap-2'>
        {ralColors.map((color, index) => (
          <Tooltip content={tColors(color.color)} position='top' key={index}>
            <div
              className='relative'
              onClick={() => onChange('main_color', color.color)}
            >
              {color.color === mainColor && (
                <span className='absolute right-[-4px] top-[-6px]'>
                  <VerifiedIcon className={`text-${mainColor}`} />
                </span>
              )}
              <div
                key={index}
                className={`header-gradient flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full bg-white`}
              >
                <div
                  className='h-3/4 w-3/4 rounded-full'
                  style={{ backgroundColor: `${color.shades[0].hex}` }}
                />
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
      {shades && <ConfiguratorCardTitle title='Teinte' />}
      {shades ? (
        <div className='flex h-[400px] flex-col gap-4 overflow-auto'>
          {shades.map((color, index) => (
            <div
              key={index}
              onClick={() => onChange('shade_color', color.code)}
              className={`flex w-full cursor-pointer items-center justify-between rounded-3xl bg-white px-3 py-2`}
            >
              <div className='flex items-center justify-center gap-2'>
                <div
                  className='h-8 w-8 rounded-full'
                  style={{ backgroundColor: `${color.hex}` }}
                />
                <Typography>{color.code}</Typography>
              </div>
              {color.code === shadeColor && (
                <VerifiedIcon className={`text-${shadeColor}`} />
              )}
            </div>
          ))}
        </div>
      ) : null}
    </ConfiguratorCard>
  );
}
