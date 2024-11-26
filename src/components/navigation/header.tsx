'use client';
import React, { useState, useEffect } from 'react';
import Button from '../atoms/button';
import Logo from '../utils/logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from './navigation';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLinks from '../utils/socialLinks';
import LinkWrapper from '../utils/LinkWrapper';
import useIsDesktop from '@/hooks/useIsDesktop';
import { Link } from '@/i18n/routing';
import LocaleSwitcher from './localeSwitcher';

export default function Header({
  fixedMenu = false,
  fixedMenuBackground,
}: {
  fixedMenu?: boolean;
  fixedMenuBackground?: string;
}) {
  const isDesktop = useIsDesktop();
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

  const headerFixed = !isDesktop || fixedMenu || skipHero || showMenu;

  return (
    <>
      <motion.header
        initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        animate={{
          backgroundColor: headerFixed
            ? 'rgba(255, 255, 255, 1)'
            : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 z-50 flex w-full items-center justify-center ${
          headerFixed ? 'header-gradient' : 'bg-transparent'
        }`}
      >
        <div className='relative flex h-20 w-full max-w-7xl items-center justify-between px-6'>
          <div className='hidden lg:flex'>
            <Navigation color={headerFixed ? 'black' : 'white'} nav='header' />
          </div>
          <LinkWrapper
            href={'/'}
            className='absolute w-40 lg:left-0 lg:right-0 lg:ml-auto lg:mr-auto'
          >
            <Logo color={headerFixed ? 'black' : 'white'} />
          </LinkWrapper>
          <div className='hidden gap-3 lg:flex'>
            <Link href='/location'>
              <Button
                color={headerFixed ? 'orange' : 'white'}
                variant={headerFixed ? 'outlined' : 'filled'}
              >
                Location
              </Button>
            </Link>
            <Link href='/contact'>
              <Button>Contact</Button>
            </Link>
            <LocaleSwitcher />
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
                    className={headerFixed ? 'text-black' : 'text-white'}
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
                    className={headerFixed ? 'text-black' : 'text-white'}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
      {
        <AnimatePresence>
          {showMenu ? (
            <>
              <div
                className='fixed z-20 h-full w-full'
                onClick={() => setShowMenu(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='header-gradient-left fixed right-0 z-30 flex h-full w-2/3 flex-col items-center justify-between bg-orange px-4 pb-4 pt-32'
              >
                <Navigation color='white' nav='footer' />
                <div className='flex flex-col gap-4'>
                  <LocaleSwitcher color='white' size='small' />
                  <SocialLinks className='text-white' />
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      }
      {headerFixed ? (
        <div className={`flex h-20 ${fixedMenuBackground || ''}`} />
      ) : null}
    </>
  );
}
