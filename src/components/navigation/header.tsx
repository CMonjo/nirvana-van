'use client';
import React, { useState, useEffect } from 'react';
import Button from '../atoms/button';
import Logo from '../logo';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';
import Navigation from './navigation';

export default function Header() {
  const [skipHero, setSkipHero] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= window.innerHeight) {
        setSkipHero(true);
      } else {
        setSkipHero(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-center
    ${skipHero ? 'header-gradient' : 'bg-transparent'}
    `}
    >
      <div className='relative flex w-full max-w-screen-2xl items-center justify-between px-10 pb-20 pt-6'>
        <Navigation color={skipHero ? 'black' : 'white'} />
        <Link
          href={'/'}
          className='absolute left-0 right-0 ml-auto mr-auto w-48'
        >
          <Logo color={skipHero ? 'black' : 'white'} />
        </Link>
        <div className='flex gap-3'>
          <Button
            color={skipHero ? 'orange' : 'white'}
            variant={skipHero ? 'outlined' : 'filled'}
          >
            Location
          </Button>
          <Button>Contact</Button>
          <Button icon={<LanguageIcon fontSize='small' />} variant='outlined'>
            Français
          </Button>
        </div>
      </div>
    </header>
  );
}
