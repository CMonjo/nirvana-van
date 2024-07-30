'use client';
import React from 'react';
import Container from '../atoms/container';
import Image from 'next/image';
import Button from '../atoms/button';
import Link from 'next/link';
import Transition from '../atoms/transition';
import { motion } from 'framer-motion';
import Section from '../atoms/section';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SectionTitle from '../sections/sectionTitle';

export default function PresentationVideo() {
  return (
    <div className='relative h-[552px] w-full overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover'
      >
        <source src='/videos/background.webm' type='video/webm' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 flex h-full flex-col items-center justify-center bg-black bg-opacity-65 p-4 text-center text-white'>
        <SectionTitle title={'Nirvana Van en action'} className='mb-8' />
        <Button icon={<PlayArrowIcon />}>Voir la vidéo</Button>
      </div>
    </div>
    // <div className='flex h-[400px] w-full bg-purple-500'>
    //   <video autoPlay muted loop className='h-full w-full bg-fg-3 object-cover'>
    //     <source src='/spotify.webm' type='video/mp4' />
    //   </video>
    // </div>
    // <Section className='bg-red-500'>
    //   {/* <Container className='flex-col'>
    //     <div className='flex w-full flex-col gap-4 lg:flex-row'>
    //       <Model
    //         title='Teardrop'
    //         description="Pour les voyageurs qui aiment l'aventure"
    //         image='/model.png'
    //         color='orange'
    //         url='/teardrop'
    //       />
    //       <Model
    //         title='Trotty'
    //         description='Pour les fans de vélo'
    //         image='/model.png'
    //         color='green'
    //         url='/trotty'
    //       />
    //     </div>
    //   </Container> */}
    // </Section>
  );
}
