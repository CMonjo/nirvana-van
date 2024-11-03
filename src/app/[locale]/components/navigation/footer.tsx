'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '../atoms/typography';

export default function Header() {
  return (
    <footer
      className={`bg-dark flex w-full flex-col items-center justify-center  text-white`}
    >
      <div className='bg-dark-lighter flex w-full flex-col items-center justify-center px-6 py-8'>
        <Link href='/'>
          <Image
            src='/logo_full_white.png'
            alt='Nirvana Van logo'
            className='mb-2 md:mb-8'
            width={150}
            height={150}
          />
        </Link>
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
          <Link href='/'>
            <Typography variant='caption'>Mentions légales</Typography>
          </Link>
          <Link href='/'>
            <Typography variant='caption'>CGU / CGV</Typography>
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link href='https://www.youtube.com/@nirvanavan' target='_blank'>
            <YouTubeIcon style={{ fontSize: 28 }} />
          </Link>
          <Link
            href='https://www.facebook.com/people/Nirvana-van/100087201987137/'
            target='_blank'
          >
            <FacebookIcon style={{ fontSize: 24 }} />
          </Link>
          <Link href='https://www.instagram.com/nirvanavan_/' target='_blank'>
            <InstagramIcon style={{ fontSize: 24 }} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
