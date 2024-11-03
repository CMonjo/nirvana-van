'use client';
import React, { useState, useEffect } from 'react';
import Button from '../atoms/button';
import Logo from '../logo';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from './navigation';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [skipHero, setSkipHero] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <>
      <motion.header
        initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        animate={{
          backgroundColor:
            skipHero || showMenu
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 z-50 flex w-full items-center justify-center ${
          skipHero || showMenu ? 'header-gradient' : 'bg-transparent'
        }`}
      >
        <div className='relative flex h-24 w-full max-w-7xl items-center justify-between px-6'>
          <div className='hidden lg:flex'>
            <Navigation
              color={skipHero || showMenu ? 'black' : 'white'}
              nav='header'
            />
          </div>
          <Link
            href={'/'}
            className='absolute w-48 lg:left-0 lg:right-0 lg:ml-auto lg:mr-auto'
          >
            <Logo color={skipHero || showMenu ? 'black' : 'white'} />
          </Link>
          <div className='hidden gap-3 lg:flex'>
            <Button
              color={skipHero || showMenu ? 'orange' : 'white'}
              variant={skipHero || showMenu ? 'outlined' : 'filled'}
            >
              Location
            </Button>
            <Button>Contact</Button>
            <Button icon={<LanguageIcon fontSize='small' />} variant='outlined'>
              Français
            </Button>
          </div>
          <div className='flex w-full justify-end lg:hidden'>
            <AnimatePresence mode='wait' initial={false}>
              {!showMenu ? (
                <motion.div
                  key='menu-icon'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <MenuIcon
                    fontSize='large'
                    className={
                      skipHero || showMenu ? 'text-black' : 'text-white'
                    }
                  />
                </motion.div>
              ) : (
                <motion.div
                  key='close-icon'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <CloseIcon
                    fontSize='large'
                    className={
                      skipHero || showMenu ? 'text-black' : 'text-white'
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
      {
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='header-gradient-left fixed right-0 z-30 flex h-full w-2/3 flex-col items-center justify-between bg-orange px-4 pb-4 pt-32'
            >
              <Navigation color='white' nav='footer' />
              <div className='flex gap-4 text-white'>
                <Link
                  href='https://www.youtube.com/@nirvanavan'
                  target='_blank'
                >
                  <YouTubeIcon style={{ fontSize: 28 }} />
                </Link>
                <Link
                  href='https://www.facebook.com/people/Nirvana-van/100087201987137/'
                  target='_blank'
                >
                  <FacebookIcon style={{ fontSize: 24 }} />
                </Link>
                <Link
                  href='https://www.instagram.com/nirvanavan_/'
                  target='_blank'
                >
                  <InstagramIcon style={{ fontSize: 24 }} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </>
  );
}
