import React from 'react';
import Image from 'next/image';
import Navigation from './navigation';
import Typography from '../atoms/typography';
import SocialLinks from '../utils/socialLinks';
import LinkWrapper from '../utils/LinkWrapper';

export default function Footer() {
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
      <div className='relative flex w-full flex-row items-center justify-between px-6 py-4'>
        <div className='absolute left-1/2 hidden -translate-x-1/2 transform md:flex'>
          <Typography variant='caption'>{`Nirvana Van © 2022 - ${new Date().getFullYear()}`}</Typography>
        </div>
        <div className='flex gap-4'>
          <LinkWrapper href='/'>
            <Typography variant='caption'>Mentions légales</Typography>
          </LinkWrapper>
          <LinkWrapper href='/'>
            <Typography variant='caption'>CGU / CGV</Typography>
          </LinkWrapper>
        </div>
        <SocialLinks className='text-white' />
      </div>
    </footer>
  );
}
