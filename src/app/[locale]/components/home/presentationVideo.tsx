'use client';
import React from 'react';
import Button from '../atoms/button';
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
        <SectionTitle title={'Nirvana Van en action'} />
        <Button icon={<PlayArrowIcon />}>Voir la vidéo</Button>
      </div>
    </div>
  );
}
