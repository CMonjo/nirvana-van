'use client';
import React from 'react';
import Container from '../atoms/container';
import Image from 'next/image';
import Button from '../atoms/button';
import Link from 'next/link';
import Transition from '../atoms/transition';
import Section from '../atoms/section';
import SectionTitle from '../sections/sectionTitle';

import { motion } from 'framer-motion';
import clsx from 'clsx';

const Block = ({ className, ...rest }: { className: string }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      whileHover={{
        rotate: '1.5deg',
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={`rounded-lg p-6 ${className}`}
      {...rest}
    ></motion.div>
  );
};

const HeaderBlock = () => (
  <Block className='col-span-12 row-span-2 md:col-span-6'>
    <img
      src='https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John'
      alt='avatar'
      className='mb-4 size-14 rounded-full'
    />
    <h1 className='mb-12 text-4xl font-medium leading-tight'>
      Hi, I'm Tom.{' '}
      <span className='text-zinc-400'>
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href='#'
      className='flex items-center gap-1 text-red-300 hover:underline'
    >
      Contact me
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-red-500 md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-white'
      >
        <div>Youtube</div>
        {/* <SiYoutube /> */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='bg-green-600 col-span-6 md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-white'
      >
        {/* <SiGithub /> */}
        github
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-zinc-50 md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-black'
      >
        tiktok
        {/* <SiTiktok /> */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-blue-500 md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-white'
      >
        twitter
        {/* <SiTwitter /> */}
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className='col-span-full text-3xl leading-snug'>
    <p>
      My passion is building cool stuff.{' '}
      <span className='text-zinc-400'>
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-3'>
    {/* <div>ICON</div> */}
    <p className='text-center text-lg text-zinc-400'>Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className='col-span-12 md:col-span-9'>
    <p className='mb-3 text-lg'>Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex items-center gap-2'
    >
      <input
        type='email'
        placeholder='Enter your email'
        className='w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'
      />
      <button
        type='submit'
        className='flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300'
      >
        Join the list
      </button>
    </form>
  </Block>
);

export default function Why() {
  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid h-[456px] w-full grid-cols-12 gap-4'
        >
          <Block className='col-span-8 row-span-2 bg-blue-500'>Block 1</Block>
          <Block className='col-span-4 row-span-1 bg-red-500'>Block 2</Block>
          <Block className='col-span-4 row-span-1 bg-green'>Block 3</Block>
        </motion.div>
        <SectionTitle title='Partir en nirvana van' className='my-4' />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid h-[456px] w-full grid-cols-12 gap-4'
        >
          <Block className='col-span-4 row-span-2 bg-red-500'>Block 2</Block>
          <Block className='col-span-4 row-span-1 bg-blue-500'>Block 1</Block>
          <Block className='col-span-4 row-span-2 bg-green'>Block 3</Block>
          <Block className='col-span-4 row-span-1 bg-blue-500'>Block 1</Block>
        </motion.div>

        {/* <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='grid w-full grid-flow-dense grid-cols-12 gap-1'
        >

          <Block className='col-span-9 row-span-3 bg-green'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <Block className='row-span-9 bg-green'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <Block className='row-span-3 bg-green'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <Block className='row-span-3 bg-green'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <Block className='col-span-3 bg-green'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <Block className='col-span-6 row-span-2 md:col-span-6'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <Block className='col-span-6 row-span-2 md:col-span-3'>
            <span className='h-full w-full text-white'>Hello</span>
          </Block>
          <AboutBlock />
          <HeaderBlock />
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          <LocationBlock />
          <EmailListBlock />
        </motion.div> */}
      </Container>
    </Section>
  );
}
