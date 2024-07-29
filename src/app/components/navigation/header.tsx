'use client';
import React, { useState, useEffect } from 'react';
import Button from '../atoms/button';
import Logo from '../logo';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from './navigation';

export default function Header() {
  const [skipHero, setSkipHero] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY + 100 >= window.innerHeight) {
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
      <div className='relative flex h-24 w-full max-w-7xl items-center justify-between px-6'>
        <div className='hidden lg:flex'>
          <Navigation color={skipHero ? 'black' : 'white'} />
        </div>
        <Link
          href={'/'}
          className='absolute w-48 lg:left-0 lg:right-0 lg:ml-auto lg:mr-auto'
        >
          <Logo color={skipHero ? 'black' : 'white'} />
        </Link>
        <div className='hidden gap-3 lg:flex'>
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
        <div className='flex w-full justify-end lg:hidden'>
          <MenuIcon
            fontSize='large'
            className={skipHero ? 'text-black' : 'text-white'}
          />
          {/* <Navigation color={skipHero ? 'black' : 'white'} /> */}
        </div>
      </div>
    </header>
  );
}
