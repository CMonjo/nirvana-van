'use client';
import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../../components/sections/sectionTitle';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Image from 'next/image';

export default function Video({
  source,
  thumbnail,
  title,
  descriptionLeft,
  descriptionRight,
  showSocials = false,
}: {
  source: string;
  thumbnail: string;
  title?: string;
  descriptionLeft?: string;
  descriptionRight?: string;
  showSocials?: boolean;
}) {
  const isDesktop = window.innerWidth > 1024;
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
                <source src={source} type='video/mp4' className='rounded-3xl' />
                Your browser does not support the video tag.
              </video>
            </div>
            {descriptionLeft && descriptionRight ? (
              <div className='absolute z-10 flex w-full items-center justify-between px-4 py-16'>
                <Typography variant='h2' className={'text-6xl'}>
                  {descriptionLeft}
                </Typography>
                <Typography variant='h2' className={'text-6xl'}>
                  {descriptionRight}
                </Typography>
              </div>
            ) : null}
          </>
        ) : (
          <>
            {title ? <SectionTitle title={title} /> : null}
            <div className='relative flex h-96 w-full cursor-pointer items-center justify-center rounded-3xl'>
              <div className='z-10'>
                {!showVideo ? (
                  <div onClick={handlePlayClick}>
                    <PlayCircleIcon
                      style={{ fontSize: 56 }}
                      className='cursor-pointer'
                    />
                  </div>
                ) : null}
              </div>
              <Image
                src={thumbnail}
                alt={'Video thumbnail'}
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl'
              />
              <div
                className='absolute inset-0 rounded-3xl bg-black opacity-70'
                onClick={handlePlayClick}
              />
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
              <source src={source} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
