'use client';
import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../sections/sectionTitle';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';
import useIsDesktop from '@/hooks/useIsDesktop';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Image from 'next/image';

export default function PresentationVideo() {
  const isDesktop = useIsDesktop(1024);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isDesktop && videoRef.current) {
      // @ts-ignore
      videoRef.current.play();
    }
  }, [isDesktop]);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <Section className='bg-dark text-white'>
      <Container className='relative flex flex-col'>
        {isDesktop ? (
          <>
            <div className='h-[460px] w-full overflow-hidden rounded-3xl'>
              <video
                ref={videoRef}
                loop
                muted
                className='h-[460px] w-full rounded-3xl'
              >
                <source
                  src='/videos/home.mp4'
                  type='video/mp4'
                  className='rounded-3xl'
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='absolute z-10 flex w-full items-center justify-between px-4 py-16'>
              <Typography variant='h2' className={'text-6xl'}>
                Nirvana Van
              </Typography>
              <Typography variant='h2' className={'text-6xl'}>
                En action!
              </Typography>
            </div>
          </>
        ) : (
          <>
            <SectionTitle title={'Nirvana Van en action'} />
            <div className='relative flex h-96 w-full flex-col items-center justify-center rounded-3xl bg-slate-200 px-4 py-8 text-center text-white'>
              <div className='z-10'>
                {!showVideo ? (
                  <div onClick={handlePlayClick}>
                    <PlayCircleIcon style={{ fontSize: 56 }} />
                  </div>
                ) : null}
              </div>
              <Image
                src={'/bento-1.jpeg'}
                alt={'Video thumbnail'}
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl'
              />
              <div className='absolute inset-0 rounded-3xl bg-black opacity-70' />
            </div>
          </>
        )}
        {showVideo ? (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70'>
            <video
              autoPlay
              controls
              className='h-full w-full'
              onClick={() => setShowVideo(false)}
            >
              <source src='/videos/home.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
