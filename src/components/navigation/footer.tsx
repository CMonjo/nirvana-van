import React from 'react';
import Image from 'next/image';
import Navigation from './navigation';
import Typography from '../atoms/typography';
import SocialLinks from '../utils/socialLinks';
import LinkWrapper from '../utils/LinkWrapper';
import LocaleSwitcher from './localeSwitcher';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('navigation');

  return (
    <footer
      className={`flex w-full flex-col items-center justify-center bg-dark  text-white`}
    >
      <div className='flex w-full flex-col items-center justify-center bg-dark-lighter px-6 py-8'>
        <LinkWrapper href='/'>
          <Image
            src='/logo_full_white.png'
            alt='Nirvana Van logo'
            className='mb-2 md:mb-8'
            width={150}
            height={150}
          />
        </LinkWrapper>
        <Typography
          variant='caption'
          className='mb-8 md:hidden'
        >{`Nirvana Van © 2022 - ${new Date().getFullYear()}`}</Typography>
        <Navigation color='white' nav='footer' />
      </div>
      <div className='relative flex w-full flex-col-reverse items-center justify-between px-6 py-4 md:flex-row'>
        <div className='absolute left-1/2 hidden -translate-x-1/2 transform md:flex'>
          <Typography variant='caption'>{`Nirvana Van © 2022 - ${new Date().getFullYear()}`}</Typography>
        </div>
        <div className='mt-4 flex gap-4 md:mt-0'>
          <LinkWrapper
            href='/legals/mentions_legales.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Typography variant='caption'>{t('legalNotice')}</Typography>
          </LinkWrapper>
          <LinkWrapper
            href='/legals/cgv.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Typography variant='caption'>{t('cgv')}</Typography>
          </LinkWrapper>
          <LinkWrapper
            href='/legals/confidentialité.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Typography variant='caption'>{t('policy')}</Typography>
          </LinkWrapper>
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <LocaleSwitcher color='white' size='small' />
          <SocialLinks className='text-white' />
        </div>
      </div>
    </footer>
  );
}
