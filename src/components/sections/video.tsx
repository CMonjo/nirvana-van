'use client';
import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './title';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Image from 'next/image';
import useIsDesktop from '@/hooks/useIsDesktop';
import SocialLinks from '../utils/socialLinks';

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
  const isDesktop = useIsDesktop();
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
            <div className='h-[460px] w-full overflow-hidden'>
              <video ref={videoRef} loop muted className='h-[460px] w-full '>
                <source src={source} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
            {descriptionLeft && descriptionRight ? (
              <div className='absolute z-10 flex w-full items-center justify-between px-8 py-16'>
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
                className='absolute inset-0 rounded-3xl bg-black opacity-40'
                onClick={handlePlayClick}
              />
            </div>
          </>
        )}
        {showVideo ? (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
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
        {isDesktop && showSocials && !showVideo ? (
          <div className='absolute bottom-0 flex w-full justify-end px-8 py-8'>
            <SocialLinks className='text-white' />
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
